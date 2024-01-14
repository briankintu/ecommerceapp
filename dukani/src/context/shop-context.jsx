import  {createContext, useState} from "react"
import { useFrappeGetDocList } from 'frappe-react-sdk';


export const ShopContext =  createContext(null)
const { data } = useFrappeGetDocList('Item', {
    fields: ['name', 'item_code', 'description', 'image', 'opening_stock','item_group', 'standard_rate', 'item_name' ],
    
})



    const getDefaultCart = () => {
        let cart ={}
        for (let i = 0; i < data.length + 1; i++) {
            cart[i] = 0
    
        }
        return cart
    }







export const ShopContextProvider = (props) => {
   const [cartItems, setCartItems] = useState(getDefaultCart());

   const  addToCart 
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>
}
