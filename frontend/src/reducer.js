import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { categories, posts } from './reducers';
export default combineReducers({ categories, posts, router: routerReducer });
