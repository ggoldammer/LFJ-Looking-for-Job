import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterSection extends React.Component {
  render() {
    return (
      <Footer className="footer font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <p>
                Made with a tremendous amount of time, effort, and sacrifice.
              </p>
              <p>
                <a target="_blank" href="https://github.com/Fernando4627/LFJ-Looking-for-Job">View Github Repo Here</a>
              </p>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterSection;