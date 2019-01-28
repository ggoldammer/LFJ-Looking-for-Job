import React from "react"
import { MDBContainer, MDBCol, MDBRow } from "mdbreact"

function MainResult(props) {
    return (
        <MDBRow>
            <div>
                <h4>{props.title}</h4>
                <p>{props.employer}</p>
                <a target="_blank" href={props.link}><button>Apply!</button></a>
            </div>
        </MDBRow>
    )
}

export default MainResult