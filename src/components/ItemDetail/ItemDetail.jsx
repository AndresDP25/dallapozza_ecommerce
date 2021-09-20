
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount';


const ItemDetail = ({item}) => {
    const onAdd = (cant) => {
        // console.log(cant)
    }
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
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        {/* <Button variant="primary">COMPRAR</Button> */}
                    </Card.Body>
                </Card>   
            </div>
            <Link className="text-decoration-none btn btn-danger" to={`/`} >Volver a categorias</Link>
        </>
     );
}
 
export default ItemDetail;


