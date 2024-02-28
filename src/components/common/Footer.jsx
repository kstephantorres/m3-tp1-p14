import { Col, Container, Row } from 'react-bootstrap';
import image from '../../assets/papafelice-marca.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer as={Container} className='text-center'>
            <Row className='d-flex'>
                <Col lg={4}>
                <img src={image} alt="imagen de la marca" className='img-thumbnail' width={100} />
                </Col>
                <Col lg={4}>
                    <h4>Enlaces rapidos</h4>
                    <ul className='text-start'>
                        <li>
                            <Link to={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={'conocenos'}>Conócenos</Link>
                        </li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h4>Nuestra Visión</h4>
                    <p>
                    Cocinar las recetas italianas con la técnica correcta, el sabor auténtico y los productos adecuados cuando lo desee.
                    </p>
                </Col>
            </Row>
            <ul className='d-flex justify-content-center'>
                <li><i className="bi bi-facebook text-primary"></i></li>
                <li><i className="bi bi-instagram  "></i></li>
                <li><i className="bi bi-tiktok text-dark"></i></li>
                <li><i className="bi bi-youtube text-danger"></i></li>
            </ul>
        </footer>
    );
};

export default Footer;