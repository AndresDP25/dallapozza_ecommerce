import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


const Cart = () => {


  const { cartList, deleteFromCart, vaciarCarrito, precioTotal } = useCartContext();
  console.log(cartList.length )

  return (
    cartList.length > 0 ?

    <>
      <div className="container m-5">
      <div className="d-flex">
        <h3 className="m-3">Productos en el carrito:</h3>
      </div>
          <div className="text-center">
            {cartList.map(item => ( 
              <div key={item.item.id} className="container">
                <div className="d-flex flex-row justify-content-between m-1 mb-2">
                    <div className="d-flex">
                      <img src={item.item.img} alt={item.item.name} style={{ width: "10rem" }} />
                      <h4 className="ms-4">{item.item.name}</h4>
                    </div>
                    <h3><span className="me-2">{item.quantity}</span>unidades</h3>
                    <h3>$<span>{item.item.price}</span></h3>
                    <h3>$ <span>{item.quantity*item.item.price}</span></h3>
                    <div><button className="btn btn-primary" onClick={()=>deleteFromCart(item)}>Eliminar</button></div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="d-flex flex-row-reverse m-3">Total $ {precioTotal()}</h3>

          <div className="container d-flex justify-content-between">

              <Link className="text-decoration-none btn btn-secondary" to={`/`} >Seguir comprando</Link>

              <button className="btn btn-danger shadow" onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>

              <Link to="/">
                <button className="btn btn-success shadow" style={{ heigth: "100%" }}>Finalizar Compra</button>
              </Link>
          </div>
        </div>
      </> : <h3 className="container d-flex justify-content-center m-5">No hay productos en tu carrito</h3>
    
  );
};

export default Cart;




