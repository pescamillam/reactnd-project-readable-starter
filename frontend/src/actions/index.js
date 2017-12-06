import { upvotePostApi } from '../utils/api'

export const ADD_POST = 'ADD_POST';
<<<<<<< HEAD
export const VOTE_UP_POST = 'VOTE_UP_POST';
export const PROCESSING = 'PROCESSING';
export const POST_VOTED = 'POST_VOTED';
=======
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

<<<<<<< HEAD
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
=======
export function upvoteComment(comment) {
  return {
    type: UPVOTE_COMMENT,
    comment
  }
}

export function downvoteComment(comment) {
  return {
    type: DOWNVOTE_COMMENT,
    comment
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e
  }
}
