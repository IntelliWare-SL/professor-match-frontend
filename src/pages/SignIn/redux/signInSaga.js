import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './signInActionTypes';

// this is the request to login a user
export function* loginUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`/login`, action.data);
    localStorage.setItem('idToken', data.token);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      data,
    });
    if (data.user.isProfileCompleted) {
      window.location.href = '/profile';
    } else if (data.user.type === 'professor') {
      window.location.href = '/complete-profile/professor';
    } else {
      window.location.href = '/complete-profile/lecturer';
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.LOGIN_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
