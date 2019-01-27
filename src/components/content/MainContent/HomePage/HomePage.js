import React, { Component } from "react"
import SearchBar from "../SearchBar"
import MainContainer from "../MainResult"
import request from "request"




class HomePage extends Component {



    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }

}

export default HomePage