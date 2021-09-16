import { useState, useEffect } from 'react';

import { getFetchUno } from '../../utils/Mock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getFetchUno
        .then(resp => setItem(resp))
    }, [])

    return ( 
        <div className="container mt-5 text-danger text-center">
            <ItemDetail item={item} />
        </div>
     );
}
 
export default ItemDetailContainer;



