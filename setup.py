from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ecommerceapp/__init__.py
from ecommerceapp import __version__ as version

setup(
	name="ecommerceapp",
	version=version,
	description="ReactJS Website intergrate with Ecommerce ERPNEXT",
	author="AICL - ANGALIA INVESTMENT CONSORTIUM LIMITED",
	author_email="tech.support@aicl.co.tz",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
