import { LOGOUT, AUTH_ERROR } from "../actions/type";

const INITIAL_STATE = {
  errorMessage: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload + " Check again before continue",
      };
    case LOGOUT:
      return {
        ...state,
      };
    case "UPDATE_AUTH":
      return {
        errorMessage: null,
        user: action.payload,
      };
    default:
      return state;
  }
};
