import * as actionTypes from './signInActionTypes';

export function loginUser(data) {
  return { type: actionTypes.LOGIN, data };
}

export function loginOutUser() {
  return { type: actionTypes.LOGOUT };
}
