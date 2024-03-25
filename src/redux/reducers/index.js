const initialState = {
  companyFav: {
    content: [],
  }, // Array of job objects
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV_COMPANY":
      return {
        // prima copiamo il precedente stato
        ...state,
        companyFav: {
          contet: [...state.companyFav.content, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
