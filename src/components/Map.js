import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
};

export class CurrentLocation extends React.Component {
  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.saveUserLocation()}
        {this.renderChildren()}
      </div>
    );
  }
  saveUserLocation = () => {
    var { lat, lng } = this.props.initialCenter;

    if (this.state.currentLocation) {
      lat = this.state.currentLocation.lat;
      lng = this.state.currentLocation.lng;
    }
    this.props.saveUserLocation(lat, lng);
  };
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;

          //send location values to back end server
          axios.post("http://localhost:3001/setlocation", {
            lat: coords.latitude,
            lng: coords.longitude
          });

          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });

          // send current location to server
        });
      }
    }
    this.loadMap();
  }
  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }
  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 13,
  initialCenter: {
    lat: 0,
    lng: 0
  },
  centerAroundCurrentLocation: false,
  visible: true
};
