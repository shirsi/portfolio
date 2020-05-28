import React from "react";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Home from "./components/Home.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div class="background"></div>
        <div className="main">
          <Route path="/" exact component={Home} />

          <Route path="/projects" render={(props) => <Projects />} />
          <Route path="/about" render={(props) => <About />} />
        </div>
      </Router>
    );
  }
}

export default App;
