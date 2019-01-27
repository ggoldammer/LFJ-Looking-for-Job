import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, MDBBtn } from "mdbreact";

class NavbarSection extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Navbar color="default-color" dark expand="md">
        <NavbarBrand>
          <strong className="white-text">LFJ App</strong>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleCollapse("navbarCollapse")}
        />
        <Collapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin">SignIn</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
            </NavItem>
            <NavItem>
              <MDBBtn to="/signin" color="primary">Login</MDBBtn>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarSection;