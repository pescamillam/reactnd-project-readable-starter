import { upvotePostApi } from '../utils/api'

export const ADD_POST = 'ADD_POST';
export const VOTE_UP_POST = 'VOTE_UP_POST';
export const PROCESSING = 'PROCESSING';
export const POST_VOTED = 'POST_VOTED';

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function upvotePost(post) {
  debugger
  return async (dispatch) => {
    dispatch({ type: PROCESSING, post});
    upvotePostApi(post, dispatchVoted);
  }
}

function dispatchVoted(updatedPost) {
  debugger
  return async (dispatch) => {
    console.log('voted');
    dispatch({ type: POST_VOTED, post: updatedPost });
  }
}
