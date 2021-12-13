export const renderLoader = (show) => async (dispatch) => {
  dispatch({ type: "LOADER", payload: show });
};
