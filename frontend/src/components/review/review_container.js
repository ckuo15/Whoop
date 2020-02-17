import { connect } from 'react-redux';
import { fetchReviews, fetchBusinessReviews } from "../../actions/reviews_actions";
import Reviews from "./review";

const mapStateToProps = (state) => ({
    businessReviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchBusinessReviews: businessId => dispatch(fetchBusinessReviews(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);