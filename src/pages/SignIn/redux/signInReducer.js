import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as actionTypes from './signInActionTypes';

const initialState = {
  loading: false,
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        idToken: action.data.token,
        loading: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        idToken: undefined,
        user: undefined,
      };
    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: 'profMatch-',
  key: 'loginReducer',
  blacklist: ['loading'],
  storage,
};

export default persistReducer(persistConfig, reducer);
