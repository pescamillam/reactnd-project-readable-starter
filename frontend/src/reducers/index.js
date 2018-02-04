import { combineReducers } from 'redux';
import { ADD_POST,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT,
    POST_VOTED,
    POST_CREATED,
    POST_CREATE,
    GET_CATEGORIES,
    GET_POSTS,
    ADD_COMMENT,
    GET_COMMENT,
    EDIT_COMMENT,
    GET_POST_COMMENTS } from '../actions';


export function posts (state=[], action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts
      };
    case POST_VOTED:
      return {
        ...state,
				posts: state.posts.map((post) => {
					if (post.id === action.post.id) {
						return action.post
					}
					return post;
				})
      };
    case POST_CREATE:
      return {
        ...state,
        posts
      }
		case GET_POSTS:
			return {
				...state,
				posts: action.posts.filter(post => post.deleted === false)
			};
    default:
      return state;
  }
}

export function comments(state={}, action) {
  switch (action.type) {
    case UPVOTE_COMMENT:
      console.log('upvote');
      return {
        ...state
      }
    case DOWNVOTE_COMMENT:
      console.log('downvote');
      return {
        ...state
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment]
      }
    case GET_COMMENT:
      return {
        ...state,
        comments: action.comment
      }
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.comment.id) {
            return action.comment;
          }
          return comment;
        })
      }
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id)
      }
    default:
      return state;
  }
}

export function categories(state = [], action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return [
				...state,
				...action.categories.categories
			]
		default:
			return state;
	}
}

export default combineReducers({
  posts, comments, categories
});
