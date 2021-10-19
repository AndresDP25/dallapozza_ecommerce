import {useState} from 'react';
import Button from 'react-bootstrap/Button';


const Modal = () => {

    

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return ( 
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>FELICIDADES</Modal.Title>
                </Modal.Header>
                <Modal.Body>SU COMPRA AH SIDO REALIZADA CON ÉXITO</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default Modal;