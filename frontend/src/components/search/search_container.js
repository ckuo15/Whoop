import { connect } from "react-redux";
import Search from "./search";

const mapStateToProps = state => {
  return {
    find: 'restaurants',
    location: 'Los Angelos, CA'
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
    
//   };
// };

export default connect(mapStateToProps)(Search);