import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Nav> */}
          <Navbar.Brand as = {Link} to="/dashboard">Grocery Store Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

          {/* </Nav> */}
            {/* <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Add New Item
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link>
                <Nav.Link as={Link}  to="/viewAllOrders">Orders History</Nav.Link>{" "}
              </Nav.Link>{" "}
              <Nav.Link>
                <Nav.Link as={Link} to="/create">
                  Add New Product
                </Nav.Link>{" "}
              </Nav.Link>{" "}
              <Nav.Link>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Nav.Link as={Link} to="/banner">Banner</Nav.Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      
    </>
  );
};

export default NavbarComponent;
