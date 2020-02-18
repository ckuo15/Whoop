import { connect } from "react-redux";
import { fetchBusiness, fetchBusinessPhotos } from "../../actions/businesses_actions";

import BusinessShow from "./business_show";

const mapStateToProps = (state, ownProps) => ({
  businessId: ownProps.match.params.business_id,
  businessPhotos: state.business.photos
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchBusinessPhotos: businessId => dispatch(fetchBusinessPhotos(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
