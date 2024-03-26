import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchReducer from "../reducers/searchReducer";

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

// poichè la proprietà "reducer" accetta un solo reducer per creare lo store,
// ho bisogno di ricostruire tutta la torta
const unifiedReducer = combineReducers({
  add: favouriteReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: unifiedReducer, // uesto reducer risultate è la 'somma' di tutte le 'fette'
});

export default store;
