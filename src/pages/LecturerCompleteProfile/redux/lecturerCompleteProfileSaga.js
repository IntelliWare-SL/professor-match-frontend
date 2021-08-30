import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './lecturerCompleteProfileTypes';

// this is the request to login a user
export function* lecturerCompleteProfile(action) {
  const Axios = yield createRequest();
  const user = yield select((state) => state.signInReducer.user);
  try {
    const { data } = yield Axios.patch(
      `lecturer/editLecturer/${user._id}`,
      action.data
    );
    window.location.href = '/profile';
    yield put({
      type: actionTypes.LECTURER_EDIT_PROFILE_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.LECTURER_EDIT_PROFILE_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
