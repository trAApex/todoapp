import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as carReducer } from './addcar';
import { reducer as formReducer } from 'redux-form/immutable';

export const store  = createStore(combineReducers({
  form: formReducer,
  cars: carReducer
}),
composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));

