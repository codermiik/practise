import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../App.css'

function navbar() {
  return (

<Navbar expand="lg"
    bg="warning">
        <Container>
            <Navbar.Brand href="/">
                HOME & AWAY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="navlink" href="/">HOME</Nav.Link>
                    <Nav.Link className="navlink" href="/explore">EXPLORE</Nav.Link>
                    <Nav.Link className="navlink" href="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
  )
}


export default navbar