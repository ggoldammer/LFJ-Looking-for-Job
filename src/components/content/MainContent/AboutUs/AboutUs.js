import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
// im going to bed and work on this in morning
// i will try to get auth setup
//ok - im watching a react video atm
const AboutUs = () => {
    return (
        <MDBContainer className="pt-5">
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/andres.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Andres Gonzalez</MDBCardTitle>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/fernando.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Fernando Aguilar</MDBCardTitle>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/gabriel.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Gabriel Viveros-Goldammer</MDBCardTitle>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/sergio.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Sergio Trujillo</MDBCardTitle>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default AboutUs;