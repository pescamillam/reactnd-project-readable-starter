import { combineReducers } from 'redux';
<<<<<<< HEAD
import { ADD_POST, VOTE_UP_POST } from '../actions';
=======
import { ADD_POST, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../actions';
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e

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
