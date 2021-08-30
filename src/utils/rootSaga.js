import { all, takeEvery } from 'redux-saga/effects';
import * as signUpActionTypes from '../pages/Signup/redux/signUpActionTypes';
import * as signInActionTypes from '../pages/SignIn/redux/signInActionTypes';
import * as lecturerCompleteProfileActionTypes from '../pages/LecturerCompleteProfile/redux/lecturerCompleteProfileTypes';
import * as profCompleteProfileActionTypes from '../pages/ProfessorCompleteProfile/redux/professorCompleteProfileTypes';

import { registerUser } from '../pages/Signup/redux/signUpSaga';
import { lecturerCompleteProfile } from '../pages/LecturerCompleteProfile/redux/lecturerCompleteProfileSaga';
import { profCompleteProfile } from '../pages/ProfessorCompleteProfile/redux/professorCompleteProfileSaga';
import { loginUser } from '../pages/SignIn/redux/signInSaga';

// combining all the saga file together
export default function* root() {
  yield all([
    takeEvery(signUpActionTypes.REGISTER, registerUser),
    takeEvery(signInActionTypes.LOGIN, loginUser),
    takeEvery(
      lecturerCompleteProfileActionTypes.LECTURER_EDIT_PROFILE,
      lecturerCompleteProfile
    ),
    takeEvery(
      profCompleteProfileActionTypes.PROF_EDIT_PROFILE,
      profCompleteProfile
    ),
  ]);
}
