import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCSS from '../../stylesheets/navbar.css';
import BusinessSearch from '../business/business_search';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shown: false };
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
        this.closeDisplay = this.closeDisplay.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    switchDisplay(event) {
        event.preventDefault();
        if (this.state.shown === false) {
            this.setState({ shown: true });
            event.currentTarget.lastElementChild.className = "nav-caret-container";
        }
    }

    closeDisplay(event) {
        const classes = ["nav-caret-container", "nav-profile-dropdown", "nav-cred-drop"];
        if (
            this.state.shown === true &&
            !classes.includes(event.target.parentElement.className)
        ) {
            const dropdown = document.getElementsByClassName("nav-caret-container"); 
            dropdown[0].className = "nav-caret-container-none";
            this.setState({ shown: false });
        }
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="nav-right-login">
                    <div onClick={this.switchDisplay} className="nav-profile-container">
                        <i className="fas fa-user-alt"></i>
                        <i className="fas fa-caret-down"></i>
                        <div className="nav-caret-container-none">
                            {/* <i className="fas fa-caret-up"></i> */}
                            <div className="nav-profile-dropdown">
                                <div className="nav-cred-drop">
                                    <i className="fas fa-user-alt" id="drop"></i>
                                    <span className="username-drop">
                                        {this.props.user.username}
                                    </span>
                                </div>
                                <div className="nav-logout-drop">
                                    <span onClick={this.props.logout} className="logout-drop">
                                        Log Out
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
        let navClass;
        this.props.search !== undefined ? navClass = 'search-navbar' : navClass = 'navbar'

        return (
            <div onClick={this.closeDisplay} className={navClass}>
                <Link to={'/'}><img height="150" width="250" className="nav-icon" src="/static/images/whooplogo.png" /></Link>
                <BusinessSearch isMainPage={false} />
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar; 