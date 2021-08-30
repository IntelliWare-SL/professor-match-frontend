import * as actionTypes from './signUpActionTypes';

export function registerUser(userType, data) {
  return { type: actionTypes.REGISTER, userType, data };
}
