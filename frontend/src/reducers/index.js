import { combineReducers } from 'redux';
import { ADD_POST, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../actions';

function posts (state={}, action) {
  switch (action.type) {
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        post
      };
    default:
      return state;
  }
}

function comments (state={}, action) {
  switch (action.type) {
    case UPVOTE_COMMENT:
      console.log('upvote');
      return {
        ...state
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments
});
