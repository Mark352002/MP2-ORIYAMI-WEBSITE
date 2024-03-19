// NavBar.tsx

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Logo from './images/logo/logo.png'

function Logout() {
  window.location.href = "/";
  setTimeout(function() {
    window.location.reload();
  }, 100);
}
const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm nav-height fixed-top">
      <Container className="py-1">
        <Navbar.Brand href="#" className="order-lg-0 col pe-xl-5">
          <img
            src={Logo}
            alt=""
            height="auto"
            width="150"
          />
        </Navbar.Brand>
        <div className=" order-lg-1">
          <Dropdown>
            <Dropdown.Toggle className="-blue" id="dropdown-basic"> {/* Removed the arrow */}
             <p className="account">ACCOUNT</p> 
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item><Link className='nav-link' to="/profile">PROFILE</Link></Dropdown.Item>
              <Dropdown.Item><Link className='nav-link' to="/reservation">RESERVATIONS</Link></Dropdown.Item>
              <Dropdown.Item  className='nav-link logout' onClick={Logout}>&nbsp;&nbsp;&nbsp;&nbsp;LOGOUT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Navbar.Toggle className="navbar-toggler ms-2" aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup" className="ms-lg-5 ps-lg-5">
          <Nav className="ms-lg-4">
            <Nav.Link aria-current="page"><Link className='nav-link' to="/">HOME</Link></Nav.Link>  
            <Nav.Link ><Link className='nav-link' to="/gallery">GALLERY</Link></Nav.Link>  
            <Nav.Link ><Link className='nav-link' to="/about">ABOUT</Link></Nav.Link>  
            <Nav.Link ><Link className='nav-link' to="/contact_us">CONTACT US</Link></Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
