import React from 'react';
import { Link } from 'react-router-dom';
import resetCSS from '../../stylesheets/reset.css';
import splashCSS from '../../stylesheets/splash.css';
import BusinessSearch from '../business/business_search';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false, location: 'San Francisco, CA' };

    this.switchDisplay = this.switchDisplay.bind(this);
    this.closeDisplay = this.closeDisplay.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  changeLocation(value) {
    this.setState({ location: value })
  }

  redirectToSearch(event) {
    this.state.location = this.state.location || "San Francisco, CA"
    this.props.history.push(`/search?businesses=${event.currentTarget.dataset.business}&location=${this.state.location}`)
  }

  switchDisplay(event) {
    event.preventDefault();
    if (this.state.shown === false) {
      this.setState({ shown: true });
      event.currentTarget.lastElementChild.className = "caret-container";
    }
  }

  closeDisplay(event) {
    const classes = ["caret-container", "profile-dropdown", "cred-drop"];
    if (
      this.state.shown === true &&
      !classes.includes(event.target.parentElement.className)
    ) {
      const dropdown = document.getElementsByClassName("caret-container");
      dropdown[0].className = "caret-container-none";
      this.setState({ shown: false });
    }
  }

  displayLoggedNav() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right-login">
          <div onClick={this.switchDisplay} className="profile-container">
            <i className="fas fa-user-alt"></i>
            <i className="fas fa-caret-down"></i>
            <div className="caret-container-none">
              <i className="fas fa-caret-up"></i>
              <div className="profile-dropdown">
                <div className="cred-drop">
                  <i className="fas fa-user-alt" id="drop"></i>
                  <span className="username-drop">
                    {this.props.user.username}
                  </span>
                </div>
                <span onClick={this.props.logout} className="logout-drop">
                  Log Out
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <span>
            <Link className="login" to="/login">
              Log In
            </Link>
          </span>
          <span>
            <Link className="signup" to="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="top" onClick={this.closeDisplay}>
          {/* <img className="splash-image" src='/static/images/pancake.jpg'/> */}
          <div className="nav">
            <div className="nav-left">
              <span>Write a Review</span>
              <span>Events</span>
              <span>Talk</span>
            </div>
            {this.displayLoggedNav()}
            {/* <div className="nav-right">
              <span>
                <Link className="login" to="/login">
                  Log In
                </Link>
              </span>
              <span>
                <Link className="signup" to="/signup">
                  Sign Up
                </Link>
              </span>
            </div> */}
          </div>
          <a href="/" className="logo">
            <img
              height="100"
              width="100"
              className="icon-image"
              src="/static/images/whooplogo.png"
            />
          </a>
          <BusinessSearch isMainPage={true} onChange={this.changeLocation} />
          <div className="top-category">
            <span className="wrench">
              <i className="fas fa-wrench"></i> Plumbers
            </span>
            <span className="utensils">
              <i className="fas fa-utensils"></i> Restaurants
            </span>
            <span className="home-icon">
              <i className="fas fa-home"></i> Home Services
            </span>
            <span className="delivery">
              <i className="fas fa-truck"></i> Delivery
            </span>
          </div>
        </div>
        <div className="middle" onClick={this.closeDisplay}>
          <div className="category">
            <span>Browse Businesses by Category</span>
            <div className="category-top">
              <img
                className="restaurants"
                src="/static/images/restaurants.png"
                data-business="restaurants"
                onClick={this.redirectToSearch}
              />
              <img
                className="shopping"
                src="/static/images/shopping.png"
                data-business="shopping"
                onClick={this.redirectToSearch}
              />
              <img
                className="nightlife"
                src="/static/images/bar.png"
                data-business="nightlife"
                onClick={this.redirectToSearch}
              />
              <img
                className="active"
                src="/static/images/active.png"
                data-business="active"
                onClick={this.redirectToSearch}
              />
            </div>
            <div className="category-bottom">
              <img
                className="spa"
                src="/static/images/spa.png"
                data-business="spabeauty"
                onClick={this.redirectToSearch}
              />
              <img
                className="auto"
                src="/static/images/automotive.png"
                data-business="auto"
                onClick={this.redirectToSearch}
              />
              <img
                className="home"
                src="/static/images/home.png"
                data-business="homeservices"
                onClick={this.redirectToSearch}
              />
              <img className="more" src="/static/images/more.png" />
            </div>
          </div>
          <div className="apps">
            <span>Whoop Mobile Apps</span>
            <div className="app-images">
              <a href="https://www.apple.com/ios/app-store/">
                <img className="apple" src="/static/images/apple.png" />
              </a>
              <a href="https://play.google.com/store/apps?&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0119&utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-ap-Evergreen-Jul0119-Text_Search_SKWS-id_100744_%7cEXA%7cONSEM_kwid_43700045371544925&gclid=CjwKCAiAvonyBRB7EiwAadauqTgOMDkhILxIv-PZNO77ZhCVDQRXCxarwNysr14DuYQoI39f6hCW4xoCZSgQAvD_BwE&gclsrc=aw.ds">
                <img className="android" src="/static/images/android.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom" onClick={this.closeDisplay}>
          <img className="building" src="/static/images/footer.png" />
        </div>
      </div>
    );
  }
};

export default Splash;