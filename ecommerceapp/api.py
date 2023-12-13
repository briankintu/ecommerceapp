import frappe


@frappe.whitelist( allow_guest=True )
def get_all_items():
    Items = frappe.db.sql("""SELECT * FROM `tabItem`;""")

    return items

