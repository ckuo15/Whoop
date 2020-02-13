import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from '../nav/navbar_container';
import BusinessShowCSS from '../../stylesheets/business_show.css';

class BusinessShow extends React.Component {
  state = {
    businessData: {}
  };

  componentDidMount() {
    this.props
      .fetchBusiness(this.props.businessId)
      .then(businessData =>
        this.setState({ businessData: businessData.business.data })
      );
  }

  render() {
    const { name } = this.state.businessData;
    const { category } = this.state.businessData;
    const { address } = this.state.businessData;
    const { city } = this.state.businessData;
    const { state } = this.state.businessData;
    const { zipcode } = this.state.businessData;
    const { hours } = this.state.businessData;
    const { phone } = this.state.businessData;
    const { price_range } = this.state.businessData;

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
            </div>
            <div className="right-side">
              <i class="fas fa-phone-alt"></i>
              <p className="business-number">{ phone }</p>
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