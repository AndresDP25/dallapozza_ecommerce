import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { getFirestore } from '../../services/getFirebase';
import Banner from '../../components/Banner/Banner';
import Nosotros from '../../components/Nosotros/Nosotros'


const ItemListContainer = ({prod}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    //Llamamos a la promesa, cuando termina mostramos los productos
    useEffect(() => {

        const dbQuery = getFirestore()
        const newQuery = idCategoria ? 
                            dbQuery.collection('items').where('category', '==', idCategoria ) 
                            : 
                            dbQuery.collection('items')
        
        newQuery.get()
        .then(resp => {
            setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data()})))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [idCategoria])

    // console.log(productos)

    return ( 
        <>
            <Banner/>
            <Nosotros/>
            <div className="container text-center p-3">
                
                <h2 className="p-3 fs-1 text-danger">{prod} </h2>
                <div className="contenedor">
                    { loading ? <h2>Cargando...</h2> : <ItemList productos={productos}  /> }
                </div>
            </div>
        </>
     );
}
 
export default ItemListContainer;

