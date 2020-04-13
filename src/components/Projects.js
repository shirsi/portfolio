import React from "react";
import Nav from "./Nav.js";
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
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-light" size="lg" block>
                  <Link to="/projects"> Checkout My Work</Link>
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-light" size="lg" block>
                  <Link to="/projects"> Checkout My Work</Link>
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-light" size="lg" block>
                  <Link to="/projects"> Checkout My Work</Link>
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-light" size="lg" block>
                  <Link to="/projects"> Checkout My Work</Link>
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
export default Project;
