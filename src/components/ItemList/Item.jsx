import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({producto}) => {
    return ( 
        <Card style={{ width: '18rem' }}>
            <Card.Img className="w-200px" variant="top" src={producto.img} alt='foto' />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                {producto.description}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
        </Card>
     );
}
 
export default Item;






