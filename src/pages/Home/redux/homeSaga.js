import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './homeActionTypes';

// this is the request to login a user
/* export function* loginUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`${action.data.type}/login`, action.data);
    localStorage.setItem('idToken', data.token);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
} */
