export const ADD_POST = 'ADD_POST';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

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
  }
}
