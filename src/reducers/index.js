import {combineReducers } from 'redux';
import articles from './articles';

const rooterReducer = combineReducers({
    articles
});

export default rooterReducer;