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
      stores: []
    };
  }

  componentDidMount() {
    this.props
      .fetchByCategory(this.fetchCategoryId())
      .then(stores => {
        return this.setState({ stores: stores.businesses.data })
      })
      .catch(err => console.log("No businesses to display"))
  }

  fetchCategoryId() {
    const { businesses } = this.state.parsedQuery;
    if (['restaurants', 'fast food', 'food', 'foods', 'restaurant'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa761";
    } else if (['shopping', 'clothes', 'toys', 'purses'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa762";
    } else if (['nightlife', 'drinking', 'bars', 'party', 'club', 'dance', 'dancing', 'partying', 'clubbing'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa763";
    } else if (['beauty', 'spas', 'spa', 'beauty and spas', 'beauty and spa', 'beauty spa', 'nails', 'massage'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa765";
    } else if (['active', 'active life', 'fitness', 'hiking', 'outdoors'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa764";
    } else if (['auto', 'cars', 'mechanic', 'automotive', 'car', 'body shop', 'mufflers', 'paintjob'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa766";
    } else if (['cleaning', 'handyman', 'home services', 'home', 'home repairs', 'repairman', 'water heater', 'air conditioning'].includes(businesses.toLowerCase())) {
      return "5e449188acf32d81822aa767";
    }
  }

  render() {
    const { businesses, location } = this.state.parsedQuery; 
    const style = {
      width: "50vw",
      height: "86vh",
    };

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
          <MapIndex style={style}  stores={this.state.stores}/>
        </div>
      </div>
    );
  }
}

export default Search;
