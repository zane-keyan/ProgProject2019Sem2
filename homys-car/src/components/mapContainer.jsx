import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./map";
const mapStyles = {
  width: "100%",
  height: "100%"
};
class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker
          position={{ lat: -37.8, lng: 144.96332 }}
          onClick={this.onMarkerClick}
          name={"Example marker for car 1"}
        />
        <Marker
          position={{ lat: -37.814, lng: 144.9 }}
          onClick={this.onMarkerClick}
          name={"Example marker for car 2"}
        />
        <Marker onClick={this.onMarkerClick} name={"current location"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y"
})(MapContainer);
