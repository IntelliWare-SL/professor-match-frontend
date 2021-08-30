import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './profileTypes';

// this is the request to login a user
export function* lecturerCompleteProfile(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post(`${action.data.type}/login`, action.data);
    yield put({
      type: actionTypes.GET_PROFILE_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_PROFILE_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
