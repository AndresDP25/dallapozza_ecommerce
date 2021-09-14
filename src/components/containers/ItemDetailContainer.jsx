import { useState, useEffect } from 'react';

import { getFecthUno } from '../../utils/Mock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getFecthUno
        .then(resp => setItem(resp))
    }, [])

    return ( 
        <>
            <ItemDetail Item={Item} />
        </>
     );
}
 
export default ItemDetailContainer;



