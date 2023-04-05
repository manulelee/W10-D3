import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="md" className="navbar-dark sticky-top">
        <Navbar.Brand>
          <img src="./assets/images/netflix_logo.png" alt="logo Netflix" id="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Tv Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>My List</Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav className="d-none d-md-flex ">
            <Nav.Item>
              <Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>KIDS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>KIDS</Nav.Link>
            </Nav.Item>

            <NavDropdown title="PROFILE" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <img src="./assets/images/avatar.png" alt="avatar profile pic" id="avatar-small" />
                Emanuele
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4"> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNavbar;
