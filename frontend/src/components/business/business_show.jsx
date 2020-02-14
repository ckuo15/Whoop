import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from '../nav/navbar_container';
import BusinessShowCSS from '../../stylesheets/business_show.css';
import MapIndex from '../map/map_index';

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
    const { name, category, address, city, state, zipcode, hours, phone, price_range } = this.state.businessData;
    return (
      <div>
        <NavBarContainer/>
        <div className="middle">
          <div className='images'>
            <img className="yelp-images" src="/static/images/yelp-images.png" />
          </div>
          <div className="business-info">
            <div className="left-side">
              <p className="business-name">{ name }</p>
              <img className="review-stars" src="/static/images/review-stars.png" />
              <p className="price-range"> { price_range }</p>
              <div className="write-add">
                <p className="write-review"><i className="fas fa-star"></i>Write a Review</p>
                <p className="add-photo"><i className="fas fa-camera"></i>Add Photo</p>
              </div>
              <div className="location-hours">
                  <div className="left-map">
                    <MapIndex/>
                  </div>
                  <div className="right-hours">
                    <p className="time"><span className="day">Mon</span><span>{hours ? hours.mon : ""}</span></p>
                    <p className="time"><span className="day">Tue  </span>{hours ? hours.tue : ""}</p>
                    <p className="time"><span className="day">Wed</span>{hours ? hours.wed : ""}</p>
                    <p className="time"><span className="day">Thu  </span>{hours ? hours.thurs : ""}</p>
                    <p className="time"><span className="day">Fri&nbsp;&nbsp;&nbsp; </span>{hours ? hours.fri : ""}</p>
                    <p className="time"><span className="day">Sat&nbsp;&nbsp;</span>{hours ? hours.sat : ""}</p>
                    <p className="time"><span className="day">Sun&nbsp;&nbsp;</span>{hours ? hours.sun : ""}</p>
                  </div>
              </div>
            </div>
            <div className="right-side">
              <p className="business-number"><i className="fas fa-phone-alt"></i> { phone }</p>
              <p className="business-direction"><i className="fas fa-directions"></i>Get Directions</p>
            </div>
          </div>

        </div>
        <div className="bottom" onClick={this.closeDisplay}>
          <img className="building" src="/static/images/footer.png" />
        </div>
      </div>
    );
  }
}
export default withRouter(BusinessShow);