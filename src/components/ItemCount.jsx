import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    const sumar = () => {
        count < stock ? setCount(count + 1) : setCount(5)
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : setCount(0)
    }

    const agregarCarrito = () => {
        onAdd(count)
        setCambiarBoton(false)
    }

    


    return ( 
        <div className="container text-center">
            <div className="row">
                <div>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={sumar}><FaPlus /></button>
                        </div>
                        <div className="col-4" >
                            <h3>U { count }</h3>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={restar}><FaWindowMinimize/></button>   
                        </div>
                    </div>
                    <div className="row m-3">
                        { cambiarBoton ? 
                        <button className="btn btn-primary" onClick={agregarCarrito} >Agregar al carrito</button>
                        :
                        <div>
                            <Link to={'/cart'}>
                            <button className="btn btn-primary">Terminar Compra</button>
                            </Link>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCount;