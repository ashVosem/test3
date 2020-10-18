import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from '../reducers/auth-reducer';

const reducers = combineReducers({ auth: authReducer });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

type reducersType = typeof reducers;
export type StateType = ReturnType<reducersType>;

export default store;
