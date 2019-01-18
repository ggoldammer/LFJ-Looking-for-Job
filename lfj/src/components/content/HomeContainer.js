import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SearchBar from "./SearchBar";
import ApiResults from "./ApiResults";
import axios from "axios";
import request from "request";

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

// axios({
//     method: 'get',
//     url: "https://data.usajobs.gov/api/search?Keyword=engineer",
//     // headers: {
//     //     "Host": process.env.REACT_APP_HOST,
//     //     "User-Agent": process.env.REACT_USER_AGENT,
//     //     "Authorization-Key": process.env.REACT_APP_USA_KEY
//     // }
// })
//     .then(function (response) {
//         console.log(response);
//     });

request({      
    url: 'https://data.usajobs.gov/api/search?keyword=forest',      
    method: 'GET',      
    headers: {          
        "Host": process.env.REACT_APP_HOST,
        "User-Agent": process.env.REACT_USER_AGENT,
        "Authorization-Key": process.env.REACT_APP_USA_KEY     
    }  
}, function(error, response, body) {      
    var data = JSON.parse(body);
    console.log(data); 

    if(error){
        console.log(error);
        console.log(test);
    }
});



export default HomeContainer;

