import { connect } from "react-redux";
import MapIndex from "./map_index";

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

export default connect(mapStateToProps)(MapIndex);