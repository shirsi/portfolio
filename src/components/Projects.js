import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import travel from "../travel.png";
import butterfly from "../butterfly.png";
import fan from "../fan.png";
import mb from "../mb-new.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

class Project extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Container fluid className="project">
          <Container fluid="md">
            <div fluid="md" class="project-card">
              <CardDeck>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="fan" src={mb} />
                  <Card.Body>
                    <Card.Title>Moments Beauty</Card.Title>
                    <Card.Text>
                      Server-side rendered cosmetic website with Python/Django
                      and postgresql backend and bootstrap styling.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-light" size="lg" block>
                      <a href="https://momentsbeauty.herokuapp.com/">
                        Live Site
                      </a>
                    </Button>
                  </Card.Footer>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="fan" src={travel} />
                  <Card.Body>
                    <Card.Title>Dunya Travel Guide</Card.Title>
                    <Card.Text>
                      A full-CRUD server-side rendered web application using
                      NodeJS, ExpressJS, MongoDB and Mongoose backend and
                      bootstrap styling.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-light" size="lg" block>
                      <a href="https://safa-express-mongo-example.herokuapp.com/travelguide">
                        Live Site
                      </a>
                    </Button>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </div>

            <div fluid="md" class="project-card">
              <CardDeck>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="fan" src={butterfly} />
                  <Card.Body>
                    <Card.Title>Butterfly Effect</Card.Title>
                    <Card.Text>
                      React single page web application with NodeJS, ExpressJS,
                      MongoDB and Mongoose backend and bootstrap styling.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-light" size="lg" block>
                      <a href="https://butterflyeffect-1.herokuapp.com/">
                        Live Site
                      </a>
                    </Button>
                  </Card.Footer>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="fan" src={fan} />
                  <Card.Body>
                    <Card.Title>DC &amp; Mavel Fanpage</Card.Title>
                    <Card.Text>
                      Static web application developed using third-party API and
                      jquery.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-light" size="lg" block>
                      <a href="https://shirsi.github.io/">Live Site</a>
                    </Button>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}
export default Project;
