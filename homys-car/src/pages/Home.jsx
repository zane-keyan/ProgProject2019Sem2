import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" height="500">
          <h1>HelloWorld</h1>
          <p>
            anjflahwjklfhawlksadfafassjnfklahfklanwlfnklawnflnawlfnlawnflknawlnflawn
          </p>
          <p />
          <p />
          <p />
          <p />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
