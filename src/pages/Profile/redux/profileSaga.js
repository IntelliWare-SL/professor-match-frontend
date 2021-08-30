import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './profileTypes';

// this is the request to login a user
export function* getProfile(action) {
  const Axios = yield createRequest();
  const user = yield select((state) => state.signInReducer.user);
  try {
    const { data } = yield Axios.get(
      user.type === 'lecturer' ? `lecturer/me` : 'professor/me',
      action.data
    );
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
