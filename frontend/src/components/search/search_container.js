import { connect } from "react-redux";
import Search from "./search";
import { fetchByCategory } from '../../actions/categories_actions';
import { fetchBusiness } from "../../actions/businesses_actions";

const mapStateToProps = (state, ownProps) => ({
  businessId: ownProps.match.params.business_id
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchByCategory: categoryId => dispatch(fetchByCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
