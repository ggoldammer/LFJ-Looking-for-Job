import React from "react"
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact"

function MainResult(props) {
    return (
        <MDBRow>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <h4 className="h4">{props.title}</h4>
                        <h6>{props.employer}</h6>
                    </MDBCol>
                    <MDBCol size="4">
                        <MDBBtn href={props.link} className="primary">Apply!</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBRow>
    )
}

export default MainResult