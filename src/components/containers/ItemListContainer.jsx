import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFetch } from '../../utils/Mock';

import ItemList from "../ItemList/ItemList";
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = ({prod}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    //Llamamos a la promesa, cuando termina mostramos los productos
    useEffect(() => {

        if (idCategoria){

            const dbQuery = getFirestore()
            dbQuery.collection('items').where('category', '==', idCategoria ).get()
            .then(resp => {
                setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data()})))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const dbquery = getFirestore()
            dbquery.collection('items').get()
            .then(resp => {
                setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data()})))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }


        // if (idCategoria) {
        //     getFetch
        //     .then(respuesta =>{
        //         setProductos( respuesta.filter(prod => prod.category === idCategoria))
        //     })
        //     .catch(error => console.log(error))
        //     .finally(()=> setLoading(false))
        // } else {
        //     getFetch
        //     .then(respuesta =>{
        //         setProductos(respuesta)
        //     })
        //     .catch(error => console.log(error))
        //     .finally(()=> setLoading(false))
        // }

    }, [idCategoria])

    // console.log(productos)

    return ( 
        <div className="container mt-5 text-danger text-center">
            <h3 className="p-3">{prod} </h3>
            <div className="contenedor">
                { loading ? <h2>Cargando...</h2> : <ItemList productos={productos}  /> }
            </div>
        </div>
     );
}
 
export default ItemListContainer;

