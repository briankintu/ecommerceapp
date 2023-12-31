# Copyright (c) 2023, AICL - ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class DukaniSettings(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		auto_add_system_users: DF.Check
	# end: auto-generated types
	pass
