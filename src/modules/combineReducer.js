import reducer from './modalStore';
import bookmarkReducer from './bookmarkStore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducer,
    bookmarkReducer
});

export default rootReducer; 