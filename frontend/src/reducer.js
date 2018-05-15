import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { categories, posts, comments, sort } from './reducers';
export default combineReducers({ categories, posts, comments, sort, router: routerReducer });
