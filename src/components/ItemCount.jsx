import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock ? setCount(count + 1) : setCount(5)
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : setCount(0)
    }

    const agregarCarrito = () => {
        onAdd(count)
    }

    


    return ( 
        <div className="container p-5 text-center bg-dark text-white-50">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 center">
                    <div className="row ">
                        <h3 className="col-12">Producto</h3>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-success" onClick={sumar}><FaPlus /></button>
                        </div>
                        <div className="col-4">
                            Stock { count }
                        </div>
                        <div className="col-4">
                            <button className="btn btn-danger" onClick={restar}><FaWindowMinimize/></button>   
                        </div>
                    </div>
                    <div className="row m-3">
                        <button className="btn btn-primary" onClick={agregarCarrito}>Agregar al carrito</button>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
     );
}
 
export default ItemCount;