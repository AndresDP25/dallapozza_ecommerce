import { useState, createContext, useContext } from 'react';

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item, quantity){
        // console.log(item);
        const index = cartList.findIndex(i => i.item.id === item.id)

        if (index > -1){
            const oldCart = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: quantity + oldCart}])
        } else {
            setCartList([...cartList,{item, quantity} ])
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    const deleteFromCart = (item) => {
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        setCartList([...deleteProduct]);
    }

    const iconCart = () => {
        return cartList.reduce ((acum, valor) => acum + valor.quantity, 0)
    }

    const precioTotal = () => {
        return cartList.reduce((acum, valor) => (acum + (valor.quantity * valor.item.price)), 0)
    }

    
    return ( 
        <cartContext.Provider value={{
            cartList,
            deleteFromCart,
            iconCart,
            addToCart,
            precioTotal,
            vaciarCarrito
            
        }}>
            {children}
        </cartContext.Provider>
     )
}