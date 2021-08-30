import * as actionTypes from './signUpActionTypes';

const initialState = {
  loading: false,
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
