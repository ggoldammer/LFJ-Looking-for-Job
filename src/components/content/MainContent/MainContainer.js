import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
// import HomePage from "./HomePage/HomePage"
import SearchBar from "./SearchBar";
import ApiResults from "./ApiResultItem";
import axios from "axios";
import request from "request";

class MainContainer extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    {/* <HomePage /> */}
                    <SearchBar/>
                </MDBRow>
            </MDBContainer>
        );
    }
}


export default MainContainer;

