import * as actionTypes from './profileTypes';

// Actions happening in home page
export function getProfile(data) {
  return { type: actionTypes.GET_PROFILE, data };
}
