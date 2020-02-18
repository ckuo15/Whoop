import { connect } from "react-redux";
import { addBusinessReview } from "../../actions/reviews_actions";
import { fetchBusiness } from '../../actions/businesses_actions';

import BusinessReview from "./business_review";

const mapStateToProps = (state, ownProps) => ({ // mapping this because we need user id and business id for photo upload
    userId: state.session.user.id,
    username: state.session.user.username,
    businessId: ownProps.match.params.business_id
});

const mapDispatchToProps = dispatch => ({
    addBusinessReview: (review) => dispatch(addBusinessReview(review)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessReview);