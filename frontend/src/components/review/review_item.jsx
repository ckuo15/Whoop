import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexCSS from '../../stylesheets/review_index.css';
import { formatDate } from '../../util/date_util';



class ReviewItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="review-container">
                <div className="review-section">
                    <div className="review">
                        <div className="review-left">
                            <img className="profile-pic" src="/static/images/profile.png" />
                            <p className="user-name">{this.props.review.username}</p>
                        </div>
                        <div className="review-right">
                            <div className="stars-date">
                                <img className="review-section-stars" src="/static/images/review-stars.png" />
                                <p className='datecreated'>{formatDate(this.props.review.date)}</p>
                            </div>
                            <div className="review-content">
                                <p className="review-body">{this.props.review.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
};

export default withRouter(ReviewItem);


// this.props.review.id, author, 