import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/businesses_actions";

import BusinessShow from "./business_show";

const mapStateToProps = (state, ownProps) => ({
  businessId: ownProps.match.params.business_id
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
