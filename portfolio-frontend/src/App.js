import React from "react";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
********************************************************
          Define
********************************************************
*/
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://butterflyeffect-1.herokuapp.com/";
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="main">
          <Route path="/" exact component={Home} />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} baseURL={baseURL} />}
          />
          <Route
            path="/resume"
            render={(props) => <Resume {...props} baseURL={baseURL} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
