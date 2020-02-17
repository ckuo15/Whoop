import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav/navbar_container";
import BusinessShowCSS from "../../stylesheets/business_show.css";
import MapIndex from "../map/map_index";
import ReviewContainer from "../review/review_container";

class BusinessShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
    const style = {
      width: "28vw",
      height: "36vh"
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
      <div>
        <NavBarContainer />
        <div className="middle">
          <div className="images">
            <img className="yelp-images" src="/static/images/yelp-images.png" />
          </div>
          <div>
            <div className="business-info">
              <div className="left-side">
                <p className="business-name">{name}</p>
                <img
                  className="review-stars"
                  src="/static/images/review-stars.png"
                />
                <p className="price-range"> {price_range}</p>
                <div className="write-add">
                  <p className="write-review">
                    <i className="fas fa-star"></i>Write a Review
                  </p>
                  <button className="add-photo" onClick={() => this.props.history.push(`/businesses/${this.props.businessId}/upload`)}>
                    <i className="fas fa-camera"></i>Add Photo
                  </button>
                </div>
                <div className="location-hours">
                  <div className="left-map">
                    <div className="header">
                      <p>Location & Hours</p>
                    </div>
                    <div className="map-info">
                      <MapIndex
                        style={style}
                        stores={[this.state.businessData]}
                      />
                      <p className="address">{address}</p>
                      <p className="city">
                        {city}, {state} {zipcode}
                      </p>
                    </div>
                  </div>
                  <div className="right-hours">
                    <p className="time">
                      <span className="day">Mon</span>
                      <span>{hours ? hours.mon : ""}</span>
                    </p>
                    <p className="time">
                      <span className="day">Tue </span>
                      {hours ? hours.tue : ""}
                    </p>
                    <p className="time">
                      <span className="day">Wed</span>
                      {hours ? hours.wed : ""}
                    </p>
                    <p className="time">
                      <span className="day">Thu </span>
                      {hours ? hours.thurs : ""}
                    </p>
                    <p className="time">
                      <span className="day">Fri&nbsp;&nbsp;&nbsp; </span>
                      {hours ? hours.fri : ""}
                    </p>
                    <p className="time">
                      <span className="day">Sat&nbsp;&nbsp;</span>
                      {hours ? hours.sat : ""}
                    </p>
                    <p className="time">
                      <span className="day">Sun&nbsp;&nbsp;</span>
                      {hours ? hours.sun : ""}
                    </p>
                  </div>
                </div>
                <div className="amentities">
                  <div className="amen-header">
                    <p>Amenities</p>
                  </div>
                  <div className="amentities-top">
                    <p>
                      <span>
                        <i className="fas fa-parking"></i>
                      </span>
                      <span> Parking Street </span> Yes
                    </p>
                    <p>
                      <i className="far fa-credit-card"></i>&nbsp; Accepts Credit Cards &nbsp;&nbsp;<span>Yes</span>
                    </p>
                  </div>
                  <div className="amentities-bottom">
                    <p>
                        <i className="fas fa-wifi"></i>&nbsp;Wi-Fi&nbsp;&nbsp;<span>Yes</span>
                    </p>
                    <p>
                      <i className="fas fa-truck"></i>Delivery&nbsp;&nbsp;
                      <span>No</span>
                    </p>
                  </div>
                </div>
                <ReviewContainer businessId={this.props.businessId} />
              </div>
              <div className="right-side">
                <p className="business-number">
                  <i className="fas fa-phone-alt"></i> {phone}
                </p>
                <p className="business-direction">
                  <i className="fas fa-directions"></i>Get Directions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" onClick={this.closeDisplay}>
          <img className="building" src="/static/images/footer.png" />
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessShow);
