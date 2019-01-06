import {combineReducers} from 'redux';
import tokenReducer from './tokenReducer';

const allReducers = combineReducers({
    token: tokenReducer,
});

export default allReducers
