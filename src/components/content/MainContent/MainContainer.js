import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SearchBar from "./SearchBar";
import ApiResults from "./ApiResults";
import axios from "axios";
import request from "request";

class MainContainer extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <SearchBar />
                    <ApiResults className="" />
                </MDBRow>
            </MDBContainer>
        );
    }
}


export default MainContainer;

