import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, MDBBtn } from "mdbreact";
import fire from "../../config/Fire";

class NavbarSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }


  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      console.log(user);
      if (user) {
        this.setState({user});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

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
              <MDBBtn to="/signin" color="primary">Login</MDBBtn>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarSection;