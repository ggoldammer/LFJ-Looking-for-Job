import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SearchBar from "./SearchBar";
import ApiResults from "./ApiResults";
import axios from "axios";
import request from "request";
// import "./style.css";

class HomeContainer extends React.Component {
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

axios({
    method: 'get',
    url: "https://data.usajobs.gov/api/search?Keyword=engineer",
    headers: {
        "Host": process.env.REACT_APP_HOST,
        "User-Agent": process.env.REACT_USER_AGENT,
        "Authorization-Key": process.env.REACT_APP_USA_KEY
    }
})
    .then(function (response) {
        console.log(response);
    });

// request({
//     url: 'https://data.usajobs.gov/api/search',
//     method: 'GET',
//     headers: {
//         "Host": process.env.REACT_APP_HOST,
//         "User-Agent": process.env.REACT_USER_AGENT,
//         "Authorization-Key": process.env.REACT_APP_USA_KEY
//     }
// }, function (error, response, body) {
//     console.log(response);
// });


export default HomeContainer;

