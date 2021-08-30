import { toast } from 'react-toastify';
import { put, select } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './professorCompleteProfileTypes';

// this is the request to login a user
export function* profCompleteProfile(action) {
  const Axios = yield createRequest();
  const user = yield select((state) => state.signInReducer.user);
  try {
    const { data } = yield Axios.patch(
      `professor/editProfessor/${user._id}`,
      action.data
    );
    yield put({
      type: 'PROFILE_COMPLETED',
    });
    yield put({
      type: actionTypes.PROF_EDIT_PROFILE_SUCCESS,
      data,
    });
    window.location.href = '/profile';
  } catch (error) {
    yield put({
      type: actionTypes.PROF_EDIT_PROFILE_ERROR,
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
