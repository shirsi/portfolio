import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="brand">
        <Container fluid className="home">
          <Container fluid className="anotherbrand">
            <h1>
              I’m a software engineer that believes in intuitive design and is
              passionate about conquering complex challenges. My analytical and
              sales background allows me to work with clients to translate their
              needs into real world technical solutions.
            </h1>
            <br></br>
            <h1>-Safia Hirsi</h1>
            <br></br>

            <Link to="/projects" class="text-muted">
              {" "}
              <Button variant="outline-light" size="lg">
                Checkout My Work
              </Button>{" "}
            </Link>
          </Container>
        </Container>
      </div>
    );
  }
}
export default Home;
