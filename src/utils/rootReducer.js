import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/redux/homeReducer';
import signUpReducer from '../pages/Signup/redux/signUpReducer';
import signInReducer from '../pages/SignIn/redux/signInReducer';
import lecturerCompleteProfileReducer from '../pages/LecturerCompleteProfile/redux/lecturerCompleteProfileReducer';
import professorCompleteProfileReducer from '../pages/ProfessorCompleteProfile/redux/professorCompleteProfileReducer';

// combining all the reducers in here
export default combineReducers({
  homeReducer,
  signUpReducer,
  signInReducer,
  lecturerCompleteProfileReducer,
  professorCompleteProfileReducer,
});
