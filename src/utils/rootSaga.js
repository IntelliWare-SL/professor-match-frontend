import { all, takeEvery } from 'redux-saga/effects';
import * as homeActionTypes from '../pages/Home/redux/homeActionTypes';
import {
  getNewNotifications,
  loginUser,
  registerUser,
} from '../pages/Home/redux/homeSaga';

// combining all the saga file together
export default function* root() {
  yield all([
    // Home page
    takeEvery(homeActionTypes.LOGIN, loginUser),
    takeEvery(homeActionTypes.REGISTER, registerUser),
    takeEvery(homeActionTypes.GET_NOTIFICATIONS, getNewNotifications),
  ]);
}
