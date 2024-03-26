import { FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_FAILURE } from "../actions";

// Definizione dello stato iniziale
const initialState = {
  searchResults: [],
  error: null,
};

// Definizione del reducer per gestire le azioni relative alla ricerca
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        error: null,
      };

    case FETCH_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        searchResults: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
