import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SearchBar from "./SearchBar";
// import "./style.css";

class HomeContainer extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <SearchBar/>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default HomeContainer;