import { useCartContext } from "../../context/cartContext";
import { Card, Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {


  const { cartList, deleteFromCart, vaciarCarrito } = useCartContext();

  return (
    <div className="container m-5">
     <div className="d-flex">
       <h3 className="m-3">Productos en el carrito:</h3>
     </div>
        <div className="text-center">
          {cartList.map(item => ( 
            <div key={item.item.id} className="container">
              <div className="d-flex flex-row justify-content-between m-1 mb-2">
                  <img src={item.item.img} alt={item.item.name} style={{ width: "10rem" }} />
                  <h3>{item.item.name}</h3>
                  <h3>$ <span>{item.item.price}</span></h3>
                  <div><button className="btn btn-primary" onClick={()=>deleteFromCart(item)}>Eliminar</button></div>
              </div>
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between">

            {/* <h3 className="border p-2 shadow m-0">Total: $ {totalPrice}</h3> */}

            <button className="btn btn-danger shadow" onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>

            <Link to="/">
              <button className="btn btn-success shadow" style={{ heigth: "100%" }}>Finalizar Compra</button>
            </Link>
        </div>
      </div>
    
  );
};

export default Cart;




