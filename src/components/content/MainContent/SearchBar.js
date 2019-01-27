import React from "react";
import { Col, FormInline, Button, MDBJumbotron, MDBContainer } from "mdbreact";
import request from "request"
import { array } from "prop-types";
import $ from "jquery"
import { get } from "http";



/////////////////////////////////////////////
//////////////COMPONENT BELOW //////////////
///////////////////////////////////////////

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: ''
        }
    }

    handleInput = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => console.log(this.state))
    }

    handleSubmit = event => {
        event.preventDefault();

        request({
            url: `https://data.usajobs.gov/api/search?keyword=${this.state.query}&locationname=${this.state.location}`,
            method: 'GET',
            headers: {
                "Host": process.env.REACT_APP_HOST,
                "User-Agent": process.env.REACT_USER_AGENT,
                "Authorization-Key": process.env.REACT_APP_USA_KEY
            }
        }, function (error, response, body) {
            var data = JSON.parse(body);
            for (let i = 0; i < data.SearchResult.SearchResultItems.length; i++) {

            }
            console.log(data);

            if (error) {
                console.log(error);
            }

        });
    }


    render() {
        return (
            <MDBJumbotron className="hero" fluid>
                <MDBContainer>
                    <h1 className="hero-text text-center">Look For A Job.</h1>
                    <Col md="12">

                        <FormInline className="md-form mx-auto mb-4">
                            <input
                                className="form-control mx-auto mr-sm-2"
                                name="query"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                id="search-query"
                                onChange={this.handleInput}
                            />
                            <input
                                className="form-control mx-auto mr-sm-2"
                                type="text"
                                name="location"
                                placeholder="City/State"
                                aria-label="City/State"
                                id="location"
                                onChange={this.handleInput}
                            />
                            <Button
                                gradient="aqua"
                                rounded
                                size="sm"
                                type="submit"
                                className="mx-auto"
                                id="search-button"
                                onClick={this.handleSubmit}
                            >
                                Search
</Button>
                        </FormInline>
                    </Col>
                </MDBContainer>
            </MDBJumbotron>

        );
    }
}



export default SearchBar;