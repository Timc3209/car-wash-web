import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import SearchAddress from "./SearchAddress";

interface Props {
  fixed?: string;
  showSearch: boolean;
}

export default class Header extends React.Component<Props, any> {
  render() {
    const { fixed, showSearch } = this.props;
    return (
      <div className="header-container">
        <Navbar color="dark" dark expand="md" fixed={fixed}>
          <NavbarBrand href="#">Car Wash</NavbarBrand>
          {showSearch && (
            <div className="navbar-search desktop-only">
              <SearchAddress />
            </div>
          )}
          <div className="navbar-right">
            <Nav navbar>
              <NavItem>
                <NavLink to="/Estimate/sdadsa" className="nav-link">
                  Sign In
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        {showSearch && (
          <div className="navbar-search-mobile mobile-only">
            <SearchAddress />
          </div>
        )}
      </div>
    );
  }
}
