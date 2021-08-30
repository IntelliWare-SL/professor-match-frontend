import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as actionTypes from './homeActionTypes';

const initialState = {
  loading: false,
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    /* case actionTypes.OPEN_CLOSE_FORMS:
      return { ...state, ...action.data }; */
    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: 'fcode-',
  key: 'home',
  blacklist: ['loading'],
  storage,
};

export default persistReducer(persistConfig, reducer);
