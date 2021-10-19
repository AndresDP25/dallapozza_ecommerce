// import {useState} from 'react';
import { getFirestore } from '../../services/getFirebase';

import firebase from 'firebase/app'
import { useCartContext } from "../../context/cartContext";

const CartForm = ({handleOnSubmit, handleOnChange, formData}) => {

    
    return ( 
        <div className="container">
          <form className="conProd"
          onSubmit={handleOnSubmit}
          >
            <input className="m-3"
              type='text'
              placeholder='ingrese el nombre'
              name='name'
              value={formData.name}
              onChange={handleOnChange}
              defaultChecked
            />
            <input className="m-3"
              type='text'
              placeholder='ingrese el numero de telefono'
              name='tel'
              value={formData.tel}
              onChange={handleOnChange}
              defaultChecked
            />
            <input className="m-3"
              type='text'
              placeholder='ingrese el email'
              name='email'
              value={formData.email}
              onChange={handleOnChange}
              defaultChecked
            />
            <input className="m-3"
              type='text'
              placeholder='confirme el email'
              name='email2'
              value={formData.email2}
              onChange={handleOnChange}
              defaultChecked
            />
          {(formData.email === formData.email2 && formData.email !== "")  ?

          <button className="btn btn-success shadow" style={{ heigth: "100%" }} type="submit">Finalizar Compra</button>
          :
          <button className="btn btn-danger shadow m-3" style={{ heigth: "100%" }}>Validar email</button>
        }
        </form>

      </div>

     );
}
 
export default CartForm;