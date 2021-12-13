export default (state = { showLoader: false }, action) => {
  switch (action.type) {
    case "LOADER":
      return { ...state, showLoader: action.payload };
    default:
      return state;
  }
};
