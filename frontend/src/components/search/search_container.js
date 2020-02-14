import { connect } from "react-redux";
import Search from "./search";
import { fetchByCategory } from '../../actions/categories_actions';

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchByCategory: categoryId => dispatch(fetchByCategory(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
