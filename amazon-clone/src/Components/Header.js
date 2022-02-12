import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
class Header extends Component {
  render() {
    let url = "../public/amazon-logo.png";
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <span>Edureka</span>
              <img src="%PUBLIC_URL%/logo192.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link to="/story">
                  <Link className="nav-link" aria-current="page" to="/story">
                    Our Story
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/faqs">
                    FAQs
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/contactUs">
                    {" "}
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link to="/faqs">
                    <i
                      className="fa fa-commenting-o"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Header;
