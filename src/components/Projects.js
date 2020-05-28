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
                    <Card.Title>
                      <b>Moments Beauty</b>
                    </Card.Title>
                    <Card.Text>
                      Server-side rendered a cosmetic website that allows you to
                      browse and search for products. Once you find a perfect
                      item, either add it to your cart or save it to your
                      profile!
                      <br />
                      <br />
                      This Django web application utilizes both function and
                      class-based view adhering to MVT design. Implementing a
                      responsive user interface using embedded Python,
                      Javascript, CSS, and Bootstrap. Users can easily sign up
                      and sign in with encrypted passwords and validation
                      feedback.
                      <br />
                      <br />
                      <b> Tech Stack:</b> Python 3, Django, JavaScript, HTML,
                      CSS and Postgresql{" "}
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
                      Recent traveled? Looking for new and exciting destination?
                      Dunya Travel Guide allows you to create and interact with
                      existing travel blogs. Don't forget to like and comment!
                      <br />
                      <br />
                      Dunya Travel Guide is full-CRUD server-side rendered web
                      application adhering to MVC design and implements 7
                      Restful Routes. Authorized routes utilize to determine
                      whether a user is allowed to perform an action on the site
                      <br />
                      <br />
                      <b> Tech Stack:</b> JavaScript, NodeJS, ExpressJS,
                      MongoDB, Mongoose, BCrypt, HTML, CSS and Bootstrap{" "}
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
                      Found a cool video or picture? Cute Selfie? Share it on
                      Butterfly Effect a single page social media web
                      application!
                      <br />
                      <br />
                      Butterfly Effect is a full-CRUD web application that uses
                      the 7 RESTful Routes. This React application conjunction
                      with React Router was used to develop a single page app
                      with multiple views combined with conditional render
                      creating a seamless interactive user interface.
                      <br />
                      <br />
                      <b> Tech Stack:</b> JavaScript, React, NodeJS, ExpressJS,
                      asynchronously-await fetch requests, MongoDB, Mongoose,
                      BCrypt, HTML, CSS and Bootstrap{" "}
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
                      Welcome to DC &amp; Mavel Fanpage! A comic book fan's
                      dream website. Click on some of our favorite characters or
                      search up some of your favorites.
                      <br />
                      <br />
                      Static web application developed using third-party API and
                      jQuery. This app implements a responsive design that is
                      fully functional on both desktop and mobile devices. Using
                      AJAX requests and JavaScript promises to incorporate
                      retrieved JSON data into the DOM.
                      <br />
                      <br />
                      <b> Tech Stack:</b> JavaScript, jQuery, HTML, and CSS{" "}
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
