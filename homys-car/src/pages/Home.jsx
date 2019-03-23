import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import "./home.css";
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
        <div className="row">
          <div className="col-lg-9 nopadding my-col order-lg-2 mapContainer" />

          <div className="col-lg-3 order-lg-1 nopadding my-col">
            <ul class="list-group bg-dark">
              <li class="list-group-item bg-dark text-white">
                Car 1 <br />
                blah blah blah <br />
                1km
              </li>
              <li class="list-group-item bg-dark text-white">
                Car 2 <br />
                blah blah blah <br />
                1km
              </li>
              <li class="list-group-item bg-dark text-white">
                Car 3 <br />
                blah blah blah <br />
                1km
              </li>
              <li class="list-group-item bg-dark text-white">
                Car 4 <br />
                blah blah blah <br />
                1km
              </li>
              <li class="list-group-item bg-dark text-white">
                Car 5 <br />
                blah blah blah <br />
                1km
              </li>
              <li class="list-group-item bg-dark text-white">
                Car 6 <br />
                blah blah blah <br />
                1km
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
