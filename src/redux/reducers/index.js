const initialState = {
  companyFav: {
    content: [],
  }, // Array of job objects
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV_COMPANY":
      return {
        ...state,
        companyFav: {
          ...state.companyFav,
          content: state.companyFav.content.concat(action.playload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
