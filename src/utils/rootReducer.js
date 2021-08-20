import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/redux/homeReducer';

// combining all the reducers in here
export default combineReducers({
  homeReducer,
});
