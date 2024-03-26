// actions/index.js

export const ADD_TO_FAV_COMPANY = "ADD_TO_FAV_COMPANY";
export const REMOVE_FROM_FAV_COMPANY = "REMOVE_FROM_FAV_COMPANY";

export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";
export const FETCH_SEARCH_RESULTS_FAILURE = "FETCH_SEARCH_RESULTS_FAILURE";

export const addToFavCompany = (company) => {
  return {
    type: ADD_TO_FAV_COMPANY,
    payload: company,
  };
};

export const removeFromFavCompany = (company, i) => {
  return {
    type: REMOVE_FROM_FAV_COMPANY,
    payload: (company, i),
  };
};

// Action creator per memorizzare i risultati della ricerca con successo
export const fetchSearchResults = (results) => {
  return {
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    payload: results,
  };
};

// Action creator per gestire un fallimento durante il fetch dei risultati della ricerca
export const fetchSearchResultsFailure = (error) => {
  return {
    type: FETCH_SEARCH_RESULTS_FAILURE,
    payload: error,
  };
};
