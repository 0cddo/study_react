import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';

// root reducer 생성
const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
