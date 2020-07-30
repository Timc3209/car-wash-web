import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">Car Wash</NavbarBrand>
        <div className="navbar-right">
          <Nav navbar>
            <NavItem>
              <NavLink
                to="/taskBoard"
                className="nav-link"
                activeClassName="active"
              >
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
