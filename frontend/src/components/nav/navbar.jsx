import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCSS from '../../stylesheets/navbar.css';
import BusinessSearch from '../business/business_search';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>                
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            ); 
        } else {
            return (
                <div className="buttons">
                    <Link to={'/login'} className="login-navbar">Login</Link>
                    <Link to={'/signup'} className="signup-navbar">Signup</Link>
                </div>
            );
        }
    }

    changeLocation(value) {
        this.setState({ location: value })
    }

    render() {
        return (
            <div className='navbar'>
                <img height="150" width="250" className="nav-icon" src="/static/images/whooplogo.png" />
                <BusinessSearch isMainPage={false} />
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar; 