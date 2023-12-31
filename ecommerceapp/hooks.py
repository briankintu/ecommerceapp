from . import __version__ as app_version

app_name = "ecommerceapp"
app_title = "Ecommerce Application"
app_publisher = "AICL - ANGALIA INVESTMENT CONSORTIUM LIMITED"
app_description = "ReactJS Website intergrate with Ecommerce ERPNEXT"
app_email = "tech.support@aicl.co.tz"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/ecommerceapp/css/ecommerceapp.css"
# app_include_js = "/assets/ecommerceapp/js/ecommerceapp.js"

# include js, css files in header of web template
# web_include_css = "/assets/ecommerceapp/css/ecommerceapp.css"
# web_include_js = "/assets/ecommerceapp/js/ecommerceapp.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "ecommerceapp/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "ecommerceapp.utils.jinja_methods",
#	"filters": "ecommerceapp.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "ecommerceapp.install.before_install"
# after_install = "ecommerceapp.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "ecommerceapp.uninstall.before_uninstall"
# after_uninstall = "ecommerceapp.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "ecommerceapp.utils.before_app_install"
# after_app_install = "ecommerceapp.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "ecommerceapp.utils.before_app_uninstall"
# after_app_uninstall = "ecommerceapp.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "ecommerceapp.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
    "User": {
        "after_insert": "ecommerceapp.ecommerce_application.doctype.dukani_user.dukani_user.add_user_to_dukani",
        "before_validate": "ecommerceapp.ecommerce_application.doctype.dukani_user.dukani_user.add_user_to_dukani",
    }
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"ecommerceapp.tasks.all"
#	],
#	"daily": [
#		"ecommerceapp.tasks.daily"
#	],
#	"hourly": [
#		"ecommerceapp.tasks.hourly"
#	],
#	"weekly": [
#		"ecommerceapp.tasks.weekly"
#	],
#	"monthly": [
#		"ecommerceapp.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "ecommerceapp.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "ecommerceapp.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "ecommerceapp.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["ecommerceapp.utils.before_request"]
# after_request = ["ecommerceapp.utils.after_request"]

# Job Events
# ----------
# before_job = ["ecommerceapp.utils.before_job"]
# after_job = ["ecommerceapp.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"ecommerceapp.auth.validate"
# ]

website_route_rules = [{'from_route': '/dukani/<path:app_path>', 'to_route': 'dukani'},]