import React from "react";
import MapIndex from '../map/map_container';
import NavBarContainer from "../nav/navbar_container";
import searchCSS from '../../stylesheets/search.css';
const queryString = require("query-string");


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedQuery: queryString.parse(this.props.history.location.search),
      businessData: {}
    };
  }

  componentDidMount() {
    this.props
      .fetchBusiness(this.props.businessId)
      .then(businessData =>
        this.setState({ businessData: businessData.business.data })
      );
  }

  render() {
    console.log(this.state.parsedQuery);
    const style = {
      width: "50vw",
      height: "86vh",
    };

    const {
      name,
      category,
      address,
      city,
      state,
      zipcode,
      hours,
      phone,
      price_range
    } = this.state.businessData;

    return (
      <div className="search-container">
        <div className="navbar"><NavBarContainer /></div>
        <div className="search-bottom-container">
          <div className="search-left-half">
            <p className="search-result-header">Browsing San Francisco, CA Businesses</p>
            <div className="search-results">
              <p className="all-results">All Results</p>
              <div className="stores">
                  <div className="store">
                      <div className="middle-content">
                          <div className="store-picture">
                            <img className="business-pic" src="/static/images/search-image.png" />
                          </div>
                          <div className="store-description">
                            <p className="store-name">1. The House</p>
                            <img className="store-stars" src="/static/images/review-stars.png"/>
                            <p className="store-price">$$$</p>
                            <p className="store-number">(415) 986-8612</p>
                            <p className="store-address">1230 Grant Ave</p>
                            <p className="store-city">San Francisco, CA 94133</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <MapIndex style={style} />
        </div>
      </div>
    );
  }
}

export default Search;
