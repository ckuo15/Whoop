import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Splash from "./splash";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
