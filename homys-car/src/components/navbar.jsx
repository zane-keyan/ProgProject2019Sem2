import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img
              src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
              className="d-inline-block align-top"
              width="30"
              height="30"
            />
            {"  "}
            Homy's car
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/signin">
                Signin
              </Link>
              <Link className="nav-item nav-link" to="/signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
