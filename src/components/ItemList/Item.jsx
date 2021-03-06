import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({producto}) => {
    return ( 
        <div className="shadow-lg m-3 rounded"> 
            <Card style={{ width: '18rem' }}>
                <div className="embed-responsive embed-responsive-16by9">
                    <Card.Img className="card-img-top embed-responsive-item" variant="top" src={producto.img} alt='foto' />
                </div>
                <Card.Body>
                    <Card.Title className="fs-3">{producto.name}</Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                    <Card.Text className="fs-3">
                    $ {producto.price}
                    </Card.Text>
                    <Link to={`/detalle/${producto.id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Item;











