import * as actionTypes from './professorCompleteProfileTypes';

// Actions happening in home page
export function profCompleteProfile(data) {
  return { type: actionTypes.PROF_EDIT_PROFILE, data };
}
