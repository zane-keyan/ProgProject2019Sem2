import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Map from "../components/map";
import "./home.css";
import CarList from "../components/carList";
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
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-7 nopadding my-col order-lg-2 mapContainer">
              <Map />
            </div>
            <div className="col-lg-5 order-lg-1 nopadding my-col">
              <div className="container-fluid shadow-lg bg-dark ">
                <CarList />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
