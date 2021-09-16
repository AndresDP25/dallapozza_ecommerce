import { useState, useEffect } from 'react';
import { getFetch } from '../../utils/Mock';


import ItemCount from "../ItemCount";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({prod}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cant) => {
        console.log(cant)
    }

    //Lamamos a la promesa, cuando termina mostramos los productos
    useEffect(() => {
        getFetch
        .then(respuesta =>{
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    }, [])

    return ( 
        <div className="container mt-5 text-danger text-center">
            <h3 className="p-3">{prod} </h3>
            <div className="contenedor">
            { loading ? <h2>Cargando...</h2> : <ItemList productos={productos}  /> }
            </div>

            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        </div>
     );
}
 
export default ItemListContainer;

