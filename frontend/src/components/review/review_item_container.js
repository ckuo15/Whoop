import { connect } from 'react-redux';
import ReviewItem from './review_item';
import { fetchReviews, fetchBusinessReviews } from "../../actions/reviews_actions";


const mapStateToProps = (state) => ({
    businessReviews: state.reviews
});

// const mapDispatchToProps = dispatch => ({
//     fetchReviews: () => dispatch(fetchReviews()),
//     fetchBusinessReviews: businessId => dispatch(fetchBusinessReviews(businessId))
// });

export default connect(mapStateToProps)(ReviewItem);