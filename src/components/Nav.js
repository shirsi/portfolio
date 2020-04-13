import React from "react";

import { Link } from "react-router-dom";
{
  /* <Link to="/">Home</Link> */
}

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Safia Hirsi
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">
                <Link to="/">Home</Link>
              </a>
              <a class="nav-item nav-link" href="#">
                <Link to="/projects">Projects</Link>
              </a>
              <a class="nav-item nav-link" href="#">
                <Link to="/about">About</Link>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
