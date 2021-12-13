const INITIAL_STATE = {
  trendingList: null,
  exploreList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TRENDING":
      return {
        ...state,
        trendingList: action.payload,
      };
    case "FETCH_EXPLORE":
      return {
        ...state,
        exploreList: action.payload,
      };
    default:
      return state;
  }
};
