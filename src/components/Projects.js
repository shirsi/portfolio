import React from "react";
import Nav from "./Nav.js";
import travel from "../travel.png";
import butterfly from "../butterfly.png";
import fan from "../fan.png";
import mb from "../mb-new.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Container fluid className="project">
          <Container fluid="md">
            <CardDeck>
              <Card>
                <Card.Img variant="top" className="fan" src={mb} />
                <Card.Body>
                  <Card.Title>Moments Beauty</Card.Title>
                  <Card.Text>
                    A cosmetic website complete with user authorization.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-light" size="lg" block>
                    <a href="https://momentsbeauty.herokuapp.com/">
                      Moments Beauty
                    </a>
                  </Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Img variant="top" className="fan" src={travel} />
                <Card.Body>
                  <Card.Title>Dunya Travel Guide</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-light" size="md">
                    <a href="https://safa-express-mongo-example.herokuapp.com/travelguide">
                      Live Site
                    </a>
                  </Button>

                  <Button variant="outline-light" size="md">
                    <a href="https://safa-express-mongo-example.herokuapp.com/travelguide">
                      Code
                    </a>
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card>
                <Card.Img variant="top" className="fan" src={butterfly} />
                <Card.Body>
                  <Card.Title>Butterfly Effect</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-light" size="lg">
                    <a href="https://butterflyeffect-1.herokuapp.com/">
                      Live Site
                    </a>
                  </Button>
                  <Button variant="outline-light" size="lg">
                    <a href="https://butterflyeffect-1.herokuapp.com/">Code</a>
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" className="fan" src={fan} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-light" size="lg" block>
                    <a href="https://shirsi.github.io/">
                      DC &amp; Mavel Fanpage
                    </a>
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Container>
        </Container>
      </div>
    );
  }
}
export default Project;
