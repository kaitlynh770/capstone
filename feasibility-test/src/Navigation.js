import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Website.scss';
import { Link } from 'react-router-dom';
import Paths from './Paths';


const Navigation =  () => {
    return(
        <Navbar bg="light" expand="lg" className = "navbar-white">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"  className = "menu-item">Our Story</Nav.Link>
              <Nav.Link href = "#home" className = "menu-item">Process</Nav.Link>
              <Nav.Item>
                <Nav.Link href="#about" className = "menu-item">Why Plastifashion</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Navigation;