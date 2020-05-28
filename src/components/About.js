import React from "react";
import Nav from "./Nav.js";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
class Aboutme extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="about">
          <Container fluid="sm">
            <Container fluid="sm">
              <div class="connect">
                <h5>
                  I’m a software engineer that believes in intuitive design and
                  is passionate about conquering complex challenges. My
                  analytical and sales background allows me to work with clients
                  to translate their needs into real world technical solutions.
                  I'm looking for new experiences and would love to connect!
                </h5>
                <a
                  class="text-white"
                  href="https://www.linkedin.com/in/safiahirsi"
                >
                  <Button variant="info" size="lg">
                    {" "}
                    LinkedIn
                  </Button>{" "}
                </a>
              </div>
            </Container>
            <Container fluid="sm">
              <h1 id="skills">Skills</h1>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Languages
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>Ruby</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Frontend
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Angular</ListGroup.Item>
                        <ListGroup.Item>jQuery</ListGroup.Item>
                        <ListGroup.Item>AJAX</ListGroup.Item>
                        <ListGroup.Item>HTML 5 </ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Backend
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item>NodeJS</ListGroup.Item>
                        <ListGroup.Item>ExpressJS</ListGroup.Item>
                        <ListGroup.Item>Mongoose</ListGroup.Item>
                        <ListGroup.Item>Django</ListGroup.Item>
                        <ListGroup.Item>Ruby on Rails</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Databases &amp; Other Tools
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Postgresql</ListGroup.Item>
                        <ListGroup.Item>Git &amp; Github </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
            <Container fluid="sm">
              <h1 id="e-e">Experience &amp; Education</h1>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Experience
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        An immersive full-stack development 12-week hands-on
                        training program focusing on web development tools and
                        best practices. Programming languages including: HTML,
                        CSS, Javascript, Python and Ruby. Full stack development
                        tools, frameworks, databases and libraries skills
                        including: Django, NodeJS, ReactJS, SQL and noSQL
                        databases, NodeJS, Express, MCV, REST, AJAX, jQuery,
                        Ruby on Rails, Git, Github, and Agile/Scrum techniques.
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Education
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {" "}
                      <ListGroup>
                        General Assembly, Software Engineering Remote Immersive
                        Program Remote
                        <br></br>
                        St. Catherine University, St. Paul Bachelor of Arts -
                        Chemistry/Biochemistry
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}
export default Aboutme;
