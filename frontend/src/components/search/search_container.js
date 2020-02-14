import { connect } from "react-redux";
import Search from "./search";
import { fetchBusiness } from "../../actions/businesses_actions";

const mapStateToProps = (state, ownProps) => ({
    businessId: ownProps.match.params.business_id
});

const mapDispatchToProps = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
