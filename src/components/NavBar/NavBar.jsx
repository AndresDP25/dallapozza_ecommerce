import logo from '../img/logo.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';



function NavBar() {

    const {iconCart} = useCartContext()
    

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Link className="text-decoration-none" to='/' >
                        <img src= { logo } alt="logo" className="img_logo img-thumbnail rounded-circle m-2" style={{ width: '80px' }} />
                        <Navbar.Brand className="text-danger ms-2">CrAzYBuRgEr</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none"  to='/categoria/adultos' >
                                <Nav>Adultos</Nav>
                            </Link>
                            <Link className="text-decoration-none" to={`/categoria/jovenes`} >
                                <Nav className="ms-3">Jovenes</Nav>
                            </Link>  
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
                        <Link to='/cart'>
                            <CartWidget />   
                        </Link>
                        <div className="text-white-50 ms-3">{iconCart()}</div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar







