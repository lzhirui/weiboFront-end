import { combineReducers } from 'redux';
import userInfor from './home/index';
import login from './login/index';
import storeList from './store';

const reducers = combineReducers({
    userInfor,
    login,
    storeList
});

export default reducers;
