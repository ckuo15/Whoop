import React from "react";

class MapIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
      stores: [],
    };

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() { // In here we basically create the Google Maps component as they describe in their docs
    const ApiKey = process.env.REACT_APP_MAPS_KEY; // Accessing hidden Api key from .env file
    const script = document.createElement('script'); // Creating a script element
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`; // Attaching src to the script
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => { // Waiting until map is loaded to set state loaded to true
      this.setState({ mapIsReady: true }); // We use this to check that our map script is loaded before creating the map 
    });

    document.body.appendChild(script); // Appending the script to the body
  }

  addMarker(coordArr) { // Add markers to coords passed in below
    coordArr.forEach((coord, idx) => {
      var infowindow = new window.google.maps.InfoWindow({ // Iterate through the coords and for each, make an info window which will pop up on click
        content: this.props.stores[idx].name
      });

      var marker = new window.google.maps.Marker({ // Create the marker with a lat/lng position on our map with a title when hovering
        position: coord, 
        map: this.map,
        title: this.props.stores[idx].name
      });

      marker.addListener("click", () => { // Event listener for when a user clicks on the marker to open the info window
        infowindow.open(this.map, marker);
      });
    })
  }

  componentDidUpdate() {
    let centerPoint;
    if (this.props.stores.length > 1) { // If we have multiple stores, use SF center coords, otherwise use store coords
      centerPoint = { lat: 37.775337, lng: -122.419433 };
    } else {
      centerPoint = this.props.stores.map(store => ({ lat: store.latitude, lng: store.longitude }))[0]
    }

    // line 52 is checking if multuple business coming in from props
    
    if (this.state.mapIsReady) { // Once script is loaded, create our map
      this.map = new window.google.maps.Map(document.getElementById("map"), { // Grab the div with id map as Google says to do and pass in some attributes
        center: centerPoint, // Coords to center map on
        zoom: 13, // zoom level 
        mapTypeId: "roadmap", // type of map
        disableDefaultUI: true, // disable default map controls
        zoomControl: true, // add zoom map control
        zoomControlOptions: { // position zoom control to top left
          position: window.google.maps.ControlPosition.TOP_LEFT
        }
      });

      if (this.props.stores !== undefined && this.props.stores.length > 0) { // If stores are passed in, make an array of coords with the stores lat and lng coords
        const storesCoords = this.props.stores.map(store => ({ lat: store.latitude, lng: store.longitude })) // This is the format Google uses to add markers to coords
        this.addMarker(storesCoords); // Call our add marker function, passing in the stores array of coords as an argument
      }
    }

    
  }

  render() {
    console.log(this.props.stores)
    return (
      <div id="map" style={this.props.style}/> // Our map hooks onto this div
    );
  }
}

export default MapIndex
