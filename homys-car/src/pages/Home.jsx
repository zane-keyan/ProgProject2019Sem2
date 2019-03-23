import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron
          title="Rent now"
          subtitle="Simply selection the location you want to pick up and drop off our vehicles and see what is available for rent"
        />
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
