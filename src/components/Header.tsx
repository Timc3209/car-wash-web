import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

interface Props {
  fixed?: string;
}

export default class Header extends React.Component<Props, any> {
  render() {
    const { fixed } = this.props;
    return (
      <Navbar color="dark" dark expand="md" fixed={fixed}>
        <NavbarBrand href="/">Car Wash</NavbarBrand>
        <div className="navbar-right">
          <Nav navbar>
            <NavItem>
              <NavLink to="/taskBoard" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
