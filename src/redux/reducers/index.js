import { combineReducers } from "redux";
import auth from "./authReducer";
import programs from "./programReducer";
import userReducer from "./userReducer";
import drawer from "./drawerReducer";
import isLastDoc from "./isLastDoc";

export default combineReducers({
  auth,
  programs,
  userReducer,
  drawer,
  isLastDoc,
});
