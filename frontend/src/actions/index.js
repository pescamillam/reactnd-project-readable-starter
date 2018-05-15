import { upvotePostApi,
  downvotePostApi,
  createPost,
  createComment,
  editPostApi,
  fetchCategories,
  fetchAllPosts,
  removePost,
  fetchCommentsApi,
  upvoteCommentApi,
  downvoteCommentApi,
  removeCommentApi } from '../utils/api'

export const ADD_POST = 'ADD_POST';

export const POST_CREATE = 'POST_CREATE';

export const POST_VOTED = 'POST_VOTED';
export const POST_CREATED = 'POST_CREATED';
export const POST_DELETED = 'POST_DELETED';
export const POST_EDITED = 'POST_EDITED';

export const PROCESSING = 'PROCESSING';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';

export const ADD_COMMENT = 'ADD_COMMENT';
export const COMMENT_CREATED = 'COMMENT_CREATED';
export const GET_COMMENT = 'GET_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const GET_COMMENTS = 'GET_COMMENTS';

export const COMMENT_VOTED = 'COMMENT_VOTED';
export const COMMENT_DELETED = 'COMMENT_DELETED';

export function addPost(post) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, post });
    createPost(post, dispatchCreated, dispatch);
  }
}

export function addCommentAction(comment) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, comment });
    createComment(comment, dispatchCommentCreated, dispatch);
  }
}

export function deletePost(post) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, post });
    removePost(post.id, dispatchDeleted, dispatch);
  }
}

export function editPostAction(post) {
  return async (dispatch) => {
    editPostApi(post, dispatchPostEdited, dispatch);
  }
}

export function upvotePost(post) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, post });
    upvotePostApi(post, dispatchVoted, dispatch);
  }
}

export function downvotePost(post) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, post });
    downvotePostApi(post, dispatchVoted, dispatch);
  }
}

export function upvoteComment(comment) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, comment });
    upvoteCommentApi(comment, dispatchCommentVoted, dispatch);
  }
}

export function downvoteComment(comment) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, comment });
    downvoteCommentApi(comment, dispatchCommentVoted, dispatch);
  }
}

function dispatchVoted(updatedPost) {
  return {
    type: POST_VOTED,
    post: updatedPost
  };
}

function dispatchCreated(createdPost) {
  return {
    type: POST_CREATED,
    post: createdPost
  }
}

function dispatchPostEdited(editedPost) {
  return {
    type: POST_EDITED,
    post: editedPost
  }
}

function dispatchCommentCreated(createdComment) {
  return {
    type: COMMENT_CREATED,
    comment: createdComment
  }
}

function dispatchDeleted(deletedPost) {
  return {
    type: POST_DELETED,
    post: deletedPost
  }
}

function dispatchDeletedComment(deletedComment) {
  return {
    type: COMMENT_DELETED,
    comment: deletedComment
  }
}

export function getCategories(categories) {
	return {
		type: GET_CATEGORIES,
		categories
	}
}

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

function dispatchCommentVoted(updatedComment) {
  return {
    type: COMMENT_VOTED,
    comment: updatedComment
  };
}

export function obtainCategories() {
	return function (dispatch) {
		fetchCategories()
			.then((categories) => dispatch(getCategories(categories)));
	}
}

export function obtainPosts() {
  return function (dispatch) {
    fetchAllPosts()
      .then((posts) => dispatch(getPosts(posts)));
  }
}

export function obtainComments(postid) {
  return function (dispatch) {
    fetchCommentsApi(postid)
      .then((comments) => {
        dispatch(getComments(comments))
      })
  }
}

export function deleteCommentAction(comment) {
  return async (dispatch) => {
    dispatch({ type: PROCESSING, comment });
    removeCommentApi(comment.id, dispatchDeletedComment, dispatch);
  }
}
