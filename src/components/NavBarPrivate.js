import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { logoutAsync } from "../redux/actions/actionLogin";
import Logo from "../assets/logo-blockBuster.png"
import Bucardor from "./Bucardor";

export const NavBarPrivate = ()=>{
    const dispatch = useDispatch();
  const handleLogout =()=>{
        dispatch(logoutAsync())
    }
    return(
        
    <Navbar className="navbar">
        <div className="contenedorNav">
        <Navbar.Brand  as={NavLink} to="/home">
            <img src={Logo}></img> 
        </Navbar.Brand>
        <Nav className="Nav con">
        <Nav className="Nav">
                <Nav.Link  as={NavLink} to="/home"
            style={({ isActive }) => isActive ? { color: "yellow" } : { color: "lightgrey" }} >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/mas"
            style={({ isActive }) => isActive ? { color: "yellow" } : { color: "lightgrey" }} >Mas valoradas</Nav.Link>
            <Nav.Link as={NavLink} to="/menos"
            style={({ isActive }) => isActive ? { color: "yellow" } : { color: "lightgrey" }} >Menos valoradas</Nav.Link>
            <Nav.Link as={NavLink} to="/mis"
            style={({ isActive }) => isActive ? { color: "yellow" } : { color: "lightgrey" }} >Mis peliculas</Nav.Link>
            </Nav>
            <Bucardor  />
            <button id="btn" onClick={()=>handleLogout()}>
                salir
            </button>
        </Nav>
        </div>
  </Navbar>
        
    )
}