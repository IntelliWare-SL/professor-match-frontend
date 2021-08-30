import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './signUpActionTypes';

export function* registerUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(
      action.userType === 'professor'
        ? `professor/register`
        : `lecturer/register`,
      action.data
    );
    toast.success('Registered Successfully. Please login');
    yield put({
      type: actionTypes.REGISTER_SUCCESS,
      data,
    });
    window.location.href = '/sign-in';
  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
