import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "./../../assets/Home/logoF.png";

const AppNavbar = ({ user, handleLogout }) => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-2">
      <Container>

       
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{ fontSize: "26px", fontWeight: "600", color: "black" }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ height: "45px", width: "45px", marginRight: "10px" }}
          />
          FreVolo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            {!user && (
              <>
                <NavLink to="/" label="Home" />
                <NavLink to="/about" label="About" />
                <NavLink to="/contact" label="Contact" />
                <NavLink to="/login" label="Login" />
                <NavLink to="/register" label="Register" />
              </>
            )}

            {user && (
              <>
                {user.role === "ADMIN" && (
                  <NavLink to="/admin/dashboard" label="Admin Dashboard" />
                )}

                {user.role === "CLIENT" && (
                  <NavLink to="/client/dashboard" label="Client Dashboard" />
                )}

                {user.role === "FREELANCER" && (
                  <NavLink to="/freelancer/dashboard" label="Freelancer Dashboard" />
                )}

                <Button
                  variant="outline-dark"
                  className="ms-3"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


const NavLink = ({ to, label }) => (
  <Nav.Link as={Link} to={to} className="nav-link text-dark fw-semibold">
    {label}
  </Nav.Link>
);

export default AppNavbar;
