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
          <Link class="navbar-brand text-white " to="/">
            Safia Hirsi
          </Link>

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
              <Link to="/" class="text-white nav-item nav-link  px-md-5">
                Home
              </Link>

              <Link to="/projects" class="text-white nav-item nav-link px-md-5">
                Projects
              </Link>

              <Link to="/about" class="text-white nav-item nav-link px-md-5">
                About
              </Link>

              <a
                class="nav-item nav-link px-md-5 text-white"
                href="https://github.com/shirsi/"
              >
                Github
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
