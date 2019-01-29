import React from 'react'
// import { NavLink } from 'react-router-dom'
import { NavbarNav, NavItem, NavLink, MDBCollapse, MDBRow, NavbarToggler, Navbar, NavbarBrand, MDBCol, MDBBtn } from "mdbreact";
import fire from '../../config/Fire';


class SignedInLinks extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            collapseID: "",
        }
    }

    logout(){
        fire.auth().signOut();
    }
    // state = {
    //     collapseID: "",
    //     email: "",
    //     password: ""
    // }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    // changeHandler = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
            console.log(error);
        });
    }

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
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow>
                                <MDBCol md="4" className="mb-3">
                                    <h3>Signed In!</h3>
                                </MDBCol>
                                <MDBCol md="4" className="mb-2">
                                    <MDBBtn color="primary" type="submit" size="sm" onClick={this.logout}>
                                      Logout
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </NavbarNav>
                </MDBCollapse>
            </Navbar>

        )
    }
}

export default SignedInLinks;