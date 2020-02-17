import React from "react";
import { withRouter } from "react-router-dom";

class ReviewItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                Review Item
            </div>
        )
    }
};

export default withRouter(ReviewItem);