import { FETCH_PROGRAMS, FETCH_PROGRAM, CREATE_PROGRAM } from "../actions/type";

export default (
  state = { byProgram: "mostPopular", byCategory: "all" },
  action
) => {
  switch (action.type) {
    case CREATE_PROGRAM:
      console.log("Created successfully");
    case FETCH_PROGRAMS:
      return {
        ...state,
        programs: [...action.payload.result],
        lastDoc: action.payload.lastDoc,
        itemArray: action.payload.itemArray,
      };
    case FETCH_PROGRAM:
      return { ...state, program: action.payload };

    case "SORT_PROGRAMS":
      return {
        ...state,
        byProgram: action.payload.byProgram,
        byCategory: action.payload.byCategory,
      };
    default:
      return state;
  }
};
