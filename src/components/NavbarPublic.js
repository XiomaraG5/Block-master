import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from "../assets/logo-blockBuster.png"

export const NavBarPublic = ()=>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >
                <img src={Logo}></img> 
            </Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link  as={NavLink} to="/login/singin" className="title"
            style={({ isActive }) => isActive ? { color: "#fed941" } : { color: "lightgrey" }} >Login</Nav.Link>
            <Nav.Link as={NavLink} to="/login/registro" className="title"
            style={({ isActive }) => isActive ? { color: "#fed941" } : { color: "lightgrey" }} >Registro</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}