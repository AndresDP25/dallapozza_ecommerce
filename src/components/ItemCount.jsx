import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useState } from 'react';


const ItemCount = () => {

    const [stock, setStock] = useState(5)

    const sumarStock = () => {
        stock < 5 ? setStock(stock + 1) : setStock(5)
    }

    const restarStock = () => {
        stock > 0 ? setStock(stock - 1) : setStock(0)
    }

    const mostrarStock = () => {
        console.log(stock)
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
                            <button className="btn btn-success" onClick={sumarStock}><FaPlus /></button>
                        </div>
                        <div className="col-4">
                            Stock { stock }
                        </div>
                        <div className="col-4">
                            <button className="btn btn-danger" onClick={restarStock}><FaWindowMinimize/></button>   
                        </div>
                    </div>
                    <div className="row m-3">
                        <button className="btn btn-primary" onClick={mostrarStock} >Agregar al carrito</button>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
     );
}
 
export default ItemCount;