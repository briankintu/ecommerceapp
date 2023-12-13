
export interface WebsiteContactMessages{
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
	/**	FullName : Data	*/
	fullname?: string
	/**	Email : Data	*/
	email?: string
	/**	Tel/Mobile : Data	*/
	telmobile?: string
	/**	Subject : Data	*/
	subject?: string
	/**	Message : Text Editor	*/
	message?: string
}