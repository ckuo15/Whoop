import React from "react";
import MapIndex from '../map/map_container';
import NavBarContainer from "../nav/navbar_container";
import searchCSS from '../../stylesheets/search.css';
const queryString = require("query-string");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedQuery: queryString.parse(this.props.history.location.search)
    };
  }

  render() {
    console.log(this.state.parsedQuery);
    const style = {
      width: "50vw",
      height: "86vh",
    };

    return (
      <div className="search-container">
        <NavBarContainer />
        <div className="search-bottom-container">
          <div className="search-left-half"></div>
          <MapIndex style={style} />
        </div>
      </div>
    );
  }
}

export default Search;
