import reducer from './modalStore';
import bookmarkReducer from './bookmarkStore';
import loginReducer from './loginStore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducer,
    bookmarkReducer,
    loginReducer
});

export default rootReducer; 