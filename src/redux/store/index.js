import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/index"; // non serve /index, basta puntare alla cartella che lo contiene

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

const store = configureStore({
  reducer: mainReducer,
});

export default store;
