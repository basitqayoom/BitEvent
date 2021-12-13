import { FETCH_MYPROGRAMS } from "../actions/type";

const INITIAL_STATE = {
  errorMessage: null,
  myPrograms: null,
  registeredUsers: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MYPROGRAMS:
      return {
        ...state,
        myPrograms: action.payload,
      };
    case "GET_REGISTERED_USERS": {
      return {
        ...state,
        registeredUsers: action.payload,
      };
    }
    case "FETCH_JOINED_PROGRAMS": {
      return {
        ...state,
        joinedPrograms: action.payload,
      };
    }
    default:
      return state;
  }
};
