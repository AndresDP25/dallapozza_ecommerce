import { useCartContext } from "../../context/cartContext";



const Cart = () => {
    const {cartList} = useCartContext
    return ( 
        <div className="text-center"> 
            {cartList.map(item => <h2>{item.item.name}</h2>)}
        </div>
     );
}
 
export default Cart;