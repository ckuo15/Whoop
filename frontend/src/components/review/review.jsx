import React from "react";
import { withRouter } from "react-router-dom";
import ReviewItem from "./review_item";

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            businessReviews: []
        }
    }

    componentDidMount(){
        this.props.fetchBusinessReviews(this.props.businessId)
            .then(reviews => {
                return this.setState({businessReviews: reviews.reviews.data})
            })
    };

    componentDidUpdate() {
        this.props.fetchBusinessReviews(this.props.businessId)
            .then(reviews => {
                return this.setState({ businessReviews: reviews.reviews.data })
            })
    };

    render() {
        console.log(this.props.businessReviews);
        return (
            <div>
                <ul>
                    {this.state.businessReviews.map(review => <ReviewItem review={ review }/>)}
                </ul>
            </div>
        )
    };
};

export default withRouter(Review);

//this.props.businessReviews.data access array