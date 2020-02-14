import React from "react";
import { InfoWindow } from "google-maps-react";
// Need Places and Geolocation

class MapIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: [],
    };

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    const ApiKey = process.env.REACT_APP_MAPS_KEY;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => {
      this.setState({ mapIsReady: true });
    });

    document.body.appendChild(script);
  }

  addMarker(coordArr) {
    const infowindow = new window.google.maps.InfoWindow({
      content: "Hello World!"
    });
    coordArr.forEach(coord => {
      this.marker = new window.google.maps.Marker({
        position: coord, 
        map: this.map,
        title: "Hello world!"
      });
      this.marker.addListener("click", () => {
        infowindow.open(this.map, this.marker);
      });
    })
  }

  componentDidUpdate() {
    if (this.state.mapIsReady) {
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.775337, lng: -122.419433 },
        zoom: 15,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.TOP_LEFT
        }
      });

      this.addMarker([
        { lat: 37.775337, lng: -122.419433 },
        { lat: 37.785537, lng: -122.429453 }
      ]);
    }
  }

  render() {
    return (
      <div id="map" style={this.props.style}/>
    );
  }
}

export default MapIndex
