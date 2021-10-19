import './NavBar.css';
import logo from '../img/logo.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';



function NavBar() {

    const {iconCart} = useCartContext()
    

    return (
        <div className="nabvar">
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Link className="text-decoration-none d-flex flex-column" to='/' >
                        <img src= { logo } alt="logo" className="img_logo img-thumbnail rounded-circle ms-5" style={{ width: '70px' }} />
                        <Navbar.Brand className="text-danger crazy">CrAzYBuRgEr</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none"  to='/' >
                                <Nav className="m-3 linksProd">HOME</Nav>
                            </Link>
                            <Link className="text-decoration-none"  to='/categoria/Combos' >
                                <Nav className="m-3 linksProd">COMBOS</Nav>
                            </Link> 
                            <Link className="text-decoration-none" to={`/categoria/Cervezas`} >
                                <Nav className="m-3 linksProd">CERVEZAS</Nav>
                            </Link>  
                        </Nav>
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







