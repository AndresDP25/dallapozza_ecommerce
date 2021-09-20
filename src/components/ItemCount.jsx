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
        <div className="container text-center">
            <div className="row">
                <div>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={sumar}><FaPlus /></button>
                        </div>
                        <div className="col-4" >
                            STOCK { count }
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={restar}><FaWindowMinimize/></button>   
                        </div>
                    </div>
                    <div className="row m-3">
                        <button className="btn btn-primary" onClick={agregarCarrito}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCount;