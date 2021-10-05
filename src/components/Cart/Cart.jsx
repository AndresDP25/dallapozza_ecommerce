import {useState} from 'react';
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { getFirestore } from '../../services/getFirebase';
//esta importacion hay que volver a hacerla
import firebase from 'firebase'
import 'firebase/firestore'


const Cart = () => {
  const [formData, setFormData] = useState(inatialState)

  const { cartList, deleteFromCart, vaciarCarrito, precioTotal } = useCartContext();

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let orden = {}; 

    orden.date = firebase.firestore.Timestamp.fromDate(new Date()); 
  
    orden.buyer = formData;
  
    orden.total = precioTotal();
  
    orden.items = cartList.map(cartItem => {
      const id = cartItem.item.id; 
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.quantity; 
  
      return {id, title, price}
    })

    const db = getFirestore()
    db.collection('orders').add(orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() =>{
    setFormData(inatialState)
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
  
      // console.log(orden);
  }


  const handleOnChange =(e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
  
  console.log(formData)
  
  // console.log(cartList.length )

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
             
          </div>
        </div>

        <div className="container">
          <form className="mb-3"
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          >
            <input className="me-3"
              type='text'
              placeholder='ingrese el nombre'
              name='name'
              value={formData.name}
            />
            <input className="me-3"
              type='text'
              placeholder='ingrese el numero de telefono'
              name='tel'
              value={formData.tel}
            />
            <input className="me-3"
              type='text'
              placeholder='ingrese el email'
              name='email'
              value={formData.email}
            />
            <input className="me-3"
              type='text'
              placeholder='confirme el email'
              name='email2'
              value={formData.email2}
            />
          </form>

          {formData.email != formData.email2 ?

          
          <button className="btn btn-danger shadow" style={{ heigth: "100%" }}>Validar email</button>
          :
          <button className="btn btn-success shadow" style={{ heigth: "100%" }}>Finalizar Compra</button>}
        </div>

      </> : 

        <div>
          <h3 className="container d-flex justify-content-center m-5">No hay productos en tu carrito</h3>
          
          <Link className="text-decoration-none btn btn-secondary d-flex container justify-content-center" to={`/`} >Seguir comprando</Link>
        </div>
    
  );
};

export default Cart;


const inatialState = {
  name: '',
  tel:'',
  email:''
}




