import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/cartContext';


const ItemDetail = ({item}) => {
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    const onAdd = (cant) => {
        console.log(cant)
        setCantidadSeleccionada(cant)
        addToCart({item: item, cantidad: cant})
    }

    const handleInter = () => {
        setCambiarBoton(false)
    }

    const {addToCart} = useCartContext()

    // console.log(item)
    return ( 
        <>
            <div className="d-flex justify-content-center p-3">
                <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Img className="w-200px" variant="top" src={item.img} alt='foto' />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        { cambiarBoton ?
                        <ItemCount stock={5} initial={1} onAdd={onAdd} handleInter={handleInter} />
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
            <Link className="text-decoration-none btn btn-danger" to={`/`} >Seguir comprando</Link>
        </>
     );
}
 
export default ItemDetail;


