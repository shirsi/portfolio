import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav
          id="nav"
          class=" bg-info sticky-top navbar navbar-expand-lg  text-white navbar-light "
        >
          <a class="navbar-brand">
            <Link to="/" class=" text-white ">
              Safia Hirsi
            </Link>
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
              <a class="nav-item nav-link  px-md-5">
                <Link to="/" class="text-white">
                  Home
                </Link>
              </a>
              <a class="nav-item nav-link px-md-5">
                <Link to="/projects" class="text-white">
                  Projects
                </Link>
              </a>
              <a class="nav-item nav-link px-md-5">
                <Link to="/about" class="text-white">
                  About
                </Link>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
