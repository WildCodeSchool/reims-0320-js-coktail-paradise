import React, { useState } from "react"
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import './home.css';
import './Navbar.css';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <Link to="/">
          <p className='TitleNavBar'>Cocktail Paradise</p>
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/cocktails/create">
                Make your Cocktail
                  </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/cocktails">
                Choose your Cocktail
                  </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;