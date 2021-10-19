import './Footer.css';


const Footer = () => {
    return ( 
        <div className="footer bg-black">
            <div className="d-flex container text-center p-4 justify-content-around">
                <div className="col-sm-6 col-md-3">
                    <h3>Nosotros</h3>
                    <ul>
                        <li className="linksFooter">Carreras</li>
                        <li className="linksFooter">Trabajá con nosotros</li>
                        <li className="linksFooter">Resto del mundo</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                <h3>Legales</h3>
                    <ul>
                        <li className="linksFooter">Términos y condiciones</li>
                        <li className="linksFooter">Politicas de privacidad</li>
                        <li className="linksFooter">Bases y condiciones</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                <h3>Crazy Burgers Company</h3>
                    <p className="footerDark">En 1895 un chef llamado Louis Lassen, de Connecticut, Estados Unidos, elabora la primera hamburguesa en Norteamérica; la receta se la dieron unos marineros provenientes del puerto de Hamburgo. ... Charlie colocó la carne entre dos rebanadas de pan, denominándola hamburguesa.</p>
                </div>  
            </div> 
            <p className="text-center copyRight">Andres Dalla Pozza © 2021</p>
        </div>
     );
}
 
export default Footer;