import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/cartContext';
import './itemDetail.css';


const ItemDetail = ({item}) => {
    // const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const { addToCart } = useCartContext();

    const onAdd = (cant) => {
        setCambiarBoton(false);
        addToCart(item, cant)
    }

    return ( 
        <>
            <div className="d-flex justify-content-center p-5 itemDetail">
                <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Img className="w-200px" variant="top" src={item.img} alt='foto' />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        <Card.Text className="text-black fs-3">
                            $ {item.price}
                        </Card.Text>
                        { cambiarBoton ?
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                        :
                        <div>
                            <Link to={'/cart'}>
                                <button className="btn btn-primary">Terminar Compra</button>
                            </Link>
                        </div>
                        }
                    </Card.Body>
                </Card>   
            </div>
            <Link className="text-decoration-none btn btn-danger m-5" to={`/`} >Seguir comprando</Link>
        </>
     );
}
 
export default ItemDetail;


