import * as actionTypes from './professorCompleteProfileTypes';

const initialState = { loading: false };

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PROF_EDIT_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PROF_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.PROF_EDIT_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
