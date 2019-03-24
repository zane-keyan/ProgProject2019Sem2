import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import caricon from "../images/car-icon.png";
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
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-7 nopadding my-col order-lg-2 mapContainer" />
            <div className="col-lg-5 order-lg-1 nopadding my-col">
              <div className="container-fluid shadow-lg bg-dark ">
                <ul class="list-group  my-list-group bg-dark list-group-flush">
                  <li class="list-group-item bg-dark text-white">
                    <img
                      src={caricon}
                      alt="..."
                      className="img-thumbnail float-left rounded"
                    />
                    ModelString Year MakeString BodyString
                    <br />
                    Rego: ABCD1234
                    <button
                      type="button"
                      className="btn btn-outline-light  float-right"
                    >
                      Rent
                    </button>
                    <br /> 1km $price
                  </li>
                  <li class="list-group-item bg-dark text-white">
                    <img
                      src={caricon}
                      alt="..."
                      className="img-thumbnail float-left rounded"
                    />
                    ModelString Year MakeString BodyString
                    <br />
                    Rego: ABCD1234
                    <button
                      type="button"
                      className="btn btn-outline-light  float-right"
                    >
                      Rent
                    </button>
                    <br /> 1km $price
                  </li>
                </ul>
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
