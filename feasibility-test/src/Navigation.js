import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Website.scss';

function Navigation(){
    return(
        <Navbar bg="light" expand="lg" className = "navbar-white">
        <Container>
          {/* <Navbar.Brand href="#home" className = "menu-item">Our Story</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className = "menu-item">Our Story</Nav.Link>
              <Nav.Link href="#home" className = "menu-item">Home</Nav.Link>
              <Nav.Link href="#link" className = "menu-item" >About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Navigation;