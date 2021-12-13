export default (state = { LayoutIsLast: false }, action) => {
  switch (action.type) {
    case "LAYOUT_IS_LAST":
      return {
        ...state,
        LayoutIsLast: action.payload,
      };

    default:
      return state;
  }
};
