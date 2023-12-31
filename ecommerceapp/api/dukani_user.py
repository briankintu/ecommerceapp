import frappe
from frappe import _
import json

@frappe.whitelist()
def get_list():
    '''
    Fetches list of all users who have the role: Dukani User
    '''

    # Check if the user is a Dukani User and has he "Dukani User" role
    # If not, then throw an error
    if "Dukani User" not in frappe.get_roles():
        frappe.throw(_("You do not have a <b>Dukani User</b> role. Please contact your administrator to add your user profile as a <b>Dukani User</b>."), title="Insufficient permissions. Please contact your administrator.")
    
    if not frappe.db.exists("Dukani User", { "user": frappe.session.user }):
        frappe.throw(_("You do not have a <b>Dukani User</b> profile. Please contact your administrator to add your user profile as a <b>Dukani User</b>."), title="Insufficient permissions. Please contact your administrator.")
    
    users = frappe.db.get_all("Dukani User", fields=["full_name", "user_image",
                                   "name", "first_name"],
                           order_by="full_name")
    return users


@frappe.whitelist(methods=['POST'])
def add_users_to_dukani(users):

    if isinstance(users, str):
        users = json.loads(users)
    
    for user in users:
        user_doc = frappe.get_doc("User", user)
        user_doc.append("roles", {
            "role": "Dukani User"
        })
        user_doc.save()
    
    return "success"
            