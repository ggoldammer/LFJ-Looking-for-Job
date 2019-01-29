import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const AboutUs = () => {
    return (
        <MDBContainer className="pt-5 text-center">
            <MDBRow className="my-3">
                <MDBCol size="12">
                    <h1 className="h1 text-center">We are team Targaryen.</h1>
                    <p>As team names were based on the show Game of Thrones, we of course picked the fiercest. We are young group of aspiring developers that set out to accomplish whatever is thrown our way. Each of us has a Github repo, so feel free to check us out!</p>
                </MDBCol>
            </MDBRow>
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