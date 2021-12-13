export const isLastDocLayout = (bool) => async (dispatch) => {
  dispatch({ type: "LAYOUT_IS_LAST", payload: bool });
};
