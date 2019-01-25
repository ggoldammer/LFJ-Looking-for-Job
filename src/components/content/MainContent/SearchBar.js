import React from "react";
import { Col, FormInline, Button } from "mdbreact";
import { array } from "prop-types";
// import "./style.css";

class SearchBar extends React.Component {
    render() {
        return (
            <Col md="12">
                <FormInline className="md-form mx-auto mb-4">
                    <input
                        className="form-control mx-auto mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        id="search-query"
                    />
                    <input
                        className="form-control mx-auto mr-sm-2"
                        type="text"
                        placeholder="City/State"
                        aria-label="City/State"
                        id="location"
                    />
                    <Button
                        gradient="aqua"
                        rounded
                        size="sm"
                        type="submit"
                        className="mx-auto"
                        id="search-button"
                    >
                        Search
          </Button>
                </FormInline>
            </Col>
        );
    }
}

// function getJobs(){
//     const query = document.getElementById('search-query').input
//     const location = document.getElementById('location').input

//     request({      
//         url: `https://data.usajobs.gov/api/search?keyword=${query}&locationname=${location}`,      
//         method: 'GET',      
//         headers: {          
//             "Host": process.env.REACT_APP_HOST,
//             "User-Agent": process.env.REACT_USER_AGENT,
//             "Authorization-Key": process.env.REACT_APP_USA_KEY     
//         }  
//     }, function(error, response, body) {      
//         var data = JSON.parse(body);
//         for(i = 0; i < data.SearchResult.SearchResultItems.length; i++){

//         }
//         console.log(data); 

//         if(error){
//             console.log(error);
//         }
//     });
// }




export default SearchBar;