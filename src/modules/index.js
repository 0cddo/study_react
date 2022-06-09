import { combineReducers } from 'redux';
import counter from './counter';

// root reducer 생성
const rootReducer = combineReducers({ counter });

export default rootReducer;
