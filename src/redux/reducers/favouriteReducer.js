// reducers/companyReducer.js

import { ADD_TO_FAV_COMPANY, REMOVE_FROM_FAV_COMPANY } from "../actions";

const initialState = {
  content: [],
};

// ora che ho cartReducer che si occupadella logica di Redux per quanto riguarda il
// carrello quindi switch case, funzioni etc..

// anche lo stato inizialedeve adeguarsi a questa 'semplificazione':
// non esisterà più la fetta chiamata 'cart' perchè sono già dentro la fetta chiamata 'cart'!

// state rappresenta lo stato corrente, action rappresenta
// l'azione appena 'dispatchata'

const favoriteReducer = (state = initialState, action) => {
  // "state" al primo avvio dell'app sarà undefined, perchè l'applicativo si è appena caricato
  // nel caso state sia undefined, gli diamo come valore di default "initialState"
  // il reducer è il CUORE di Redux
  // si tratta di una funzione PURA, ovvero di una funzione che non muta MAI i propri parametri,
  // NON effettua nessun'operazione verso l'esterno (es. fetch) e che fornita dello stesso INPUT
  // restituisce sempre lo stesso OUTPUT

  switch (action.type) {
    case ADD_TO_FAV_COMPANY:
      // OGNI case del reducer deve ritornare un oggetto -> IL NUOVO STATO DELL'APPLICATIVO
      return {
        ...state, // ricopiamo dentro TUTTE le coppie chiave/valore di state, per evitare di perdere altre proprietà
        // al di fuori di cart
        content: [...state.content, action.payload],
        //   content: [...state.cart.content, action.payload]
      };

    case REMOVE_FROM_FAV_COMPANY:
      return {
        ...state,
        content: state.content.filter((company, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default favoriteReducer;
