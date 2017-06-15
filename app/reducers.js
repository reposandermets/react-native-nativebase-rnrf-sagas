import { combineReducers } from 'redux';
import countReducer from './containers/page-counter/reducer';
import { reducer as formReducer } from 'redux-form';

export default function getRootReducer() {
  return combineReducers({
    counter: countReducer,
    form: formReducer
  });
}
