const initalState = {
  favourites: [],
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FAVOURITES_CARDS":
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
