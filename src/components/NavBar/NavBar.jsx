import logo from '../img/logo.jpg';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import { useState } from 'react';



function NavBar() {

    const [carrito, setCarrito] = useState(0)

    

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <img src= { logo } alt="logo" className="img_logo img-thumbnail rounded-circle m-2" style={{ width: '80px' }} />
                    <Navbar.Brand href="#home" className="text-danger">CrAzYBuRgEr</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Nosotros</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                        </Form>
                        <CartWidget />
                        <div className="text-white-50 ms-3">{carrito}</div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar







