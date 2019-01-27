import React from 'react'
import { NavbarNav, NavItem, NavLink, MDBCollapse, MDBBtn, NavbarToggler, Navbar, NavbarBrand, MDBInput  } from "mdbreact";


class SignedOutLinks extends React.Component {
    state = {
        collapseID: ""
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
                <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
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
                </MDBCollapse>
            </Navbar>

        )
    }
}

export default SignedOutLinks;