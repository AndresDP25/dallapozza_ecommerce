import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({item}) => {
    return ( 
        <>
            <div className="d-flex justify-content-center p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="w-200px" variant="top" src={item.img} alt='foto' />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        <Button variant="primary">Detalle</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
     );
}
 
export default ItemDetail;


