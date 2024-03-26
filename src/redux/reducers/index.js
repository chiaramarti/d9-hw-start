const initialState = {
  companyFav: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV_COMPANY":
      return {
        ...state,
        companyFav: {
          ...state.companyFav,
          content: [...state.companyFav.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAV_COMPANY":
      return {
        ...state,
        companyFav: {
          ...state.companyFav,
          content: state.companyFav.content.filter((company) => company !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
