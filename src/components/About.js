import React from "react";
import Nav from "./Nav.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Aboutme extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>About</h1>
      </div>
    );
  }
}
export default Aboutme;
