import * as actionTypes from './lecturerCompleteProfileTypes';

// Actions happening in home page
export function lecturerCompleteProfile(data) {
  return { type: actionTypes.LECTURER_EDIT_PROFILE, data };
}
