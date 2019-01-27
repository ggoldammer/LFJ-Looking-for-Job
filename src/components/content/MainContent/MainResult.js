import React from "react"
import { MDBContainer, MDBCol, MDBRow } from "mdbreact"

function MainResult(props) {
    return (
        <MDBRow>
            <div>
                <h4>{props.jobTitle}</h4>
                <p>{props.jobDescription}</p>
                <button to={props.link}>Apply!</button>
            </div>
        </MDBRow>
    )
}

export default MainResult