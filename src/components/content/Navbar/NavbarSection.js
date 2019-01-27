import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, MDBBtn } from "mdbreact";
import fire from "../../config/Fire";
import SignedOutLinks from "./SignedOutLinks"

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

  // toggleCollapse = collapseID => () =>
  //   this.setState(prevState => ({
  //     collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  //   }));

  render() {
    return (
      <SignedOutLinks />
    );
  }
}

export default NavbarSection;