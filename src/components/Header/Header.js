import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="border border-2" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top border rounded-2"
            />
          </Navbar.Brand>
          <div className="navbar">
            <Nav className="me-auto">
              <Nav.Link href="">
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/portfolio">Portfolio</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/contact-us">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
