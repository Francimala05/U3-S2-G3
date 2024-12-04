import Container from 'react-bootstrap/Container';
import { Search, Bell } from 'react-bootstrap-icons';
import { BsPersonCircle } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: '100px', height: '50px' }} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" style={{backgroundColor: 'gray'}}/>

        <Navbar.Collapse id="navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/twshow" className="text-secondary fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="text-secondary fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="text-secondary fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="text-secondary fw-bold">My List</Nav.Link>
          </Nav>

          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <Search className="mx-3 text-white" size={20} />
            <div className="fw-bold text-white">KIDS</div>
            <Bell className="mx-3 text-white" size={20} />
            <BsPersonCircle className="ms-3 text-white" size={25} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;