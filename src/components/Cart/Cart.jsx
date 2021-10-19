import {useState} from 'react';
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { getFirestore } from '../../services/getFirebase';
//esta importacion hay que volver a hacerla
import firebase from 'firebase/app'
import 'firebase/firestore'
import './Cart.css';
import CartForm from './CartForm';
import Swal from 'sweetalert2';




const Cart = () => {

  const initialState = {
    name: '',
    tel:'',
    email:'',
    email2:''
  }
  
  const [formData, setFormData] = useState(initialState)


  const { cartList, deleteFromCart, vaciarCarrito, precioTotal } = useCartContext();


  const handleOnSubmit = (e) => {
    
    
    e.preventDefault()
    let orden = {}; 

    orden.date = firebase.firestore.Timestamp.fromDate(new Date()); 
  
    orden.buyer = formData;
  
    orden.total = precioTotal();
  
    orden.items = cartList.map(cartItem => {
      console.log(cartList);
      const id = cartItem.item.id; 
      const title = cartItem.item.name;
      const price = cartItem.item.price * cartItem.quantity; 
  
      return {id, title, price}
    })

    const db = getFirestore()
    db.collection('orders').add(orden)
    .then(resp => console.log(resp.id))
    .catch(err => console.log(err))
    .finally(() =>{
    setFormData(initialState)
    vaciarCarrito()
    })

    
    //Actualiza todos los items que estan en el listado de Cart del CartContext
  
      const itemsToUpdate = db.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
      )
  
      const batch = db.batch();
  
      // por cada item restar del stock la cantidad de el carrito
  
      itemsToUpdate.get()
      .then( collection => {
        collection.docs.forEach(docSnapshot => {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
          })
        })
  
        batch.commit().then(res => {
          console.log('resultado batch:',res);
        })
      })

      Swal.fire('Tu compra fué realizada con éxito','los datos son correctos','success')
  }


  const handleOnChange =(e) => {
    

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

 
  


  return (
    cartList.length > 0 ?

    <>
      <div className="container cart">
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
             
        </div>
      </div>

      <CartForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} formData={formData}  />

    </> : 

        <div className="container cart p-3">
          <h3 className="container d-flex justify-content-center m-5">No hay productos en tu carrito</h3>
          
          <Link className="text-decoration-none btn btn-secondary d-flex container justify-content-center sinProd" to={`/`} >Seguir comprando</Link>
        </div>
    
  );
};

export default Cart;










