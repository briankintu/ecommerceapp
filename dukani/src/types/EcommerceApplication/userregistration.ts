
export interface userregistration{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	First Name : Data	*/
	first_name?: string
	/**	Last Name : Data	*/
	last_name?: string
	/**	Email : Data	*/
	email?: string
	/**	Phone : Phone	*/
	phone?: string
	/**	Country : Select	*/
	country?: "Tanzania" | "Kenya" | "Uganda" | "Rwanda" | "Democratic Republic of Congo" | "Mozambique" | "Zambia" | "Zimbabwe"
	/**	Address : Text Editor	*/
	address?: string
	/**	Town/City : Data	*/
	towncity?: string
	/**	Postcode : Int	*/
	postcode?: number
}