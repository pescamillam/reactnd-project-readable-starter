import { combineReducers } from 'redux';
import { ADD_POST, VOTE_UP_POST } from '../actions';

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

export default combineReducers({
  posts
});
