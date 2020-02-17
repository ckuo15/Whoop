import React from "react";
import { withRouter } from "react-router-dom";
import ReviewItemContainer from "./review_item_container";

class Review extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinessReviews(this.props.businessId)
    };

    render() {
        console.log(this.props.businessReviews);
        return (
            <div>
                <ul>
                    {/* {this.props.businessReviews.data.map(review => <ReviewItemContainer/>)} */}
                </ul>
            </div>
        )
    };
};

export default withRouter(Review);

//this.props.businessReviews.data access array