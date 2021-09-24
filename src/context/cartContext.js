import { useState, createContext, useContext } from 'react';

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item){
        setCartList([...cartList, item])
    }

    function borrarLista() {
        cartList([])
    }
    
    return ( 
        <cartContext.Provider value={{
            cartList,
            addToCart,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>
     )
}