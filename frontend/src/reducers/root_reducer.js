import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import business from "./businesses_reducer";

export default combineReducers({
  session,
  errors,
  business
});