import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFetch } from '../../utils/Mock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getFetch
        .then((resp) => {
            if(id){
                const itemFiltrado = resp.filter((item) => item.id === parseInt(id))
                setItem(itemFiltrado)
                .catch(error => console.log(error))
                .finally(()=> setLoading(false))
            } else {
                setItem(resp)
            }
        })
        .catch((err) => console.error(err))
        .finally(()=> setLoading(false))
    }, [id])
    console.log(item)
    return ( 
        <>
        <div className="container mt-5 text-danger text-center">
            { loading ? <h2>Cargando...</h2> : <ItemDetail key={item[0].id} item={item[0]} /> }
            </div>
        </>
     );
}
 
export default ItemDetailContainer;




