import React, { Component } from "react"
import SearchBar from "../SearchBar"
import MainContainer from "../MainContainer"




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: '',
            isLoaded: false,
            jobIndex: []
        }
    }
    render() {
        return (
            <div>
                <SearchBar />
                <MainContainer />
            </div>
        )
    }

}

export default HomePage