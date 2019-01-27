import React from "react"
import { MDBContainer, MDBCol, MDBRow } from "mdbreact"

function MainResult(props) {
    return (
        <MDBRow>
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <button to={props.link}>Apply!</button>
            </div>
        </MDBRow>
    )
}

export default MainResult