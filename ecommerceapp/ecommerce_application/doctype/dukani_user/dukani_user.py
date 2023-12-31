# Copyright (c) 2023, AICL - ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _

class DukaniUser(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        enabled: DF.Check
        first_name: DF.Data | None
        full_name: DF.Data
        user: DF.Link
        user_image: DF.AttachImage | None
    # end: auto-generated types

    def before_validate(self):
        if not self.full_name:
            self.full_name = self.first_name

    def before_save(self):
        self.update_photo_from_user()

    def after_delete(self):
        '''
         Remove the Dukani User role from the user.
        '''
        user = frappe.get_doc("User", self.user)
        user.flags.ignore_permissions = True
        user.flags.deleting_dukani_user = True
        user.remove_roles("Dukani User")
        user.save()

    def update_photo_from_user(self):
        '''
         We need to create a new File record for the user image and attach it to the Dukani User record.
         Why not just copy the URL from the User record? Because the URL is not accessible to the Dukani User,
         and Frappe creates a duplicate file in the system (that is public) but does not update the URL in the field.
        '''
        user_image = frappe.db.get_value("User", self.user, "user_image")
        if user_image and not self.user_image:
            image_file = frappe.get_doc(
                        {
                            "doctype": "File",
                            "file_url": user_image,
                            "attached_to_doctype": "Dukani User",
                            "attached_to_name": self.name,
                            "attached_to_field": "user_image",
                            "is_private": 1,
                        }
                    ).insert()
            self.user_image = image_file.file_url		
    pass


def add_user_to_dukani(doc,method):
    # called when the user is inserted or updated
    # If the auto-create setting is set to True, check if the user is a System user. If yes, then create a Dukani User record for the user.
    # Else, check if the user has a Dukani User role. If yes, then create a Dukani User record for the user if not already created. 

    # If the user is already added to Dukani, do nothing.
    if not doc.flags.deleting_dukani_user:
        if frappe.db.exists("Dukani User", {"user": doc.name}):
            # Check if the role is still present. If not, then inactivate the Dukani User record.
            has_dukani_role = False
            for role in doc.get("roles"):
                if role.role == "Dukani User":
                    has_dukani_role = True
                    break
            
            if has_dukani_role:
                dukani_user = frappe.get_doc("Dukani User", {"user": doc.name})
                if not doc.full_name:
                    dukani_user.full_name = doc.first_name
                dukani_user.enabled = 1
                dukani_user.save()
            else:
                dukani_user = frappe.get_doc("Dukani User", {"user": doc.name})
                if not doc.full_name:
                    dukani_user.full_name = doc.first_name
                dukani_user.enabled = 0
                dukani_user.save()
        else:
            # Dukani user does not exist. Check if the user is a system user.
            if doc.user_type == "System User":
                auto_add = frappe.db.get_single_value("Dukani Settings", "auto_add_system_users")

                if auto_add:
                    doc.append("roles", {"role": "Dukani User"})
                    # Create a Dukani User record for the user.
                    dukani_user = frappe.new_doc("Dukani User")
                    dukani_user.user = doc.name
                    if not doc.full_name:
                        dukani_user.full_name = doc.first_name
                    dukani_user.enabled = 1
                    dukani_user.insert()
                else:
                    if "Dukani User" in [d.role for d in doc.get("roles")]:
                        # Create a Dukani User record for the user.
                        dukani_user = frappe.new_doc("Dukani User")
                        dukani_user.user = doc.name
                        if not doc.full_name:
                            dukani_user.full_name = doc.first_name
                        dukani_user.enabled = 1
                        dukani_user.insert()