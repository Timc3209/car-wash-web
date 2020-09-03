import React from "react";
import { connect } from "react-redux";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import SearchAddress from "./SearchAddress";
import { logout } from "../redux/actions";
import { AppState } from "../redux/reducers";

interface Props {
  fixed?: string;
  showSearch: boolean;
  page: string;
  loggedIn: boolean;
  logout: typeof logout;
}

class Header extends React.Component<Props, any> {
  logout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { fixed, showSearch, page, loggedIn } = this.props;
    return (
      <div className="header-container">
        <Navbar color="dark" dark expand="md" fixed={fixed}>
          <NavbarBrand href="#">Car Wash</NavbarBrand>
          {showSearch && (
            <div className="navbar-search desktop-only">
              <SearchAddress landing={false} />
            </div>
          )}
          <div className="navbar-right">
            <Nav navbar>
              <NavItem>
                {loggedIn ? (
                  <NavLink
                    href={`#`}
                    onClick={this.logout}
                    className="nav-link"
                  >
                    Log out
                  </NavLink>
                ) : (
                  <NavLink href={`#login${page}`} className="nav-link">
                    Sign in
                  </NavLink>
                )}
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        {showSearch && (
          <div className="navbar-search-mobile mobile-only">
            <SearchAddress landing={false} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => {
  const { loggedIn } = auth;
  return { loggedIn };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
