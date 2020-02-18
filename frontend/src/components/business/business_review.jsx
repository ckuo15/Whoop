import React from "react";
import FormData from 'form-data';
import NavBarContainer from "../nav/navbar_container";
import BusinessReviewCSS from '../../stylesheets/business_review.css'
import { addBusinessReview } from "../../util/reviews_api_util";
import { Link } from 'react-router-dom';


class BusinessReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            author: this.props.userId,
            body: '',
            business: null,
            businessId: this.props.businessId,
            username: this.props.username,
            shown: false
        }
        this.closeDisplay = this.closeDisplay.bind(this);
        this.update = this.update.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
        this.submitReview = this.submitReview.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId)
            .then(business => this.setState({ business: business }))
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

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    submitReview() {
        this.props.addBusinessReview(this.state);
        this.props.history.push(`/businesses/${this.props.businessId}`)
    }
    
    render(){
        let businessName;
        if (this.state.business !== null) { 
            businessName = this.state.business.business.data.name 
        }
        return(
            <div className="post-business-write-review-container">
                <div onClick={this.closeDisplay} className="post-navbar">
                    <div>
                        <Link to={'/'}><img height="130" width="230" className="post-nav-icon" src="/static/images/whooplogo.png" /></Link>
                        <span className="post-write-a-review">Write A Review</span>
                    </div>
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
                                            {this.props.username}
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
                </div>
                <div onClick={this.closeDisplay} className="post-review-section">
                    <div className="post-review-store-name">
                    <p className="post-display-store-name">{businessName}</p>
                    </div>
                    <div className="post-review-box">
                        <textarea className="post-review-textarea" rows="30" cols="100" placeholder="Type your review here" value={this.state.body} onChange={this.update('body')}/>
                    </div>
                    <button className="post-review-button" onClick={this.submitReview}>Post Review</button>
                </div>
                <div className="footer">
                    <img className="building" src="/static/images/footer.png" />
                </div>
            </div>
        )
    }
};

export default BusinessReview;