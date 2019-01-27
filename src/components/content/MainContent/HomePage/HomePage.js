import React, { Component } from "react"
import SearchBar from "../SearchBar"
import MainContainer from "../MainContainer"

class HomePage extends Component {
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