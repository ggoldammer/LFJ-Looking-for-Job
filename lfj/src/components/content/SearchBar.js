import React from "react";
import { Col, FormInline, Button } from "mdbreact";
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
                    />
                    <input
                        className="form-control mx-auto mr-sm-2"
                        type="text"
                        placeholder="City/State"
                        aria-label="City/State"
                    />
                    <Button
                        gradient="aqua"
                        rounded
                        size="sm"
                        type="submit"
                        className="mx-auto"
                    >
                        Search
          </Button>
                </FormInline>
            </Col>
        );
    }
}

export default SearchBar;