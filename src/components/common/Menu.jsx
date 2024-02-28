import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/papafelice-logo.webp"
const Menu = () => {
    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container id="navContainer">
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="logo papa felice" width={200} id="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink end className="nav-link" to={'/'}>
                            Inicio
                        </NavLink>
                        <NavLink end className='nav-link'  to={'administrador'}>Administrador</NavLink>
                        <NavLink end className='nav-link'  to={'conocenos'}>Conócenos</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;