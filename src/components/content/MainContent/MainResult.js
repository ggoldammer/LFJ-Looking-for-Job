import React from "react"
import {  MDBRow } from "mdbreact"

function MainResult(props) {
    return (
        <MDBRow>
            <div>
                <h4>{props.title}</h4>
                <p>{props.employer}</p>
                <a target="_blank" rel="noopener noreferrer" href={props.link}><button>Apply!</button></a>
            </div>
        </MDBRow>
    )
}

export default MainResult