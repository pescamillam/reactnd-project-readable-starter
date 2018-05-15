const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  //token = localStorage.token = Math.random().toString(36).substr(-8);
  token = "pescamillam";
}

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': token
};

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json());

export const fetchAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then((res) => res.json());

export const fetchCommentsApi = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then((res) => {return res.json()});

export const createPost = (post, responseFunction, dispatch) => {
  post.id = Math.random().toString().substr(-16);
  post.timestamp = Date.now();
  fetch(`${api}/posts`, { headers,
      method: 'POST',
      body: JSON.stringify(post)
    }).then((res) => res.json())
    .then((res) => dispatch(responseFunction(res)));
};

export const editPostApi = (post, responseFunction, dispatch) => {
  fetch(`${api}/posts/${post.id}`, { headers,
    method: 'PUT',
    body: JSON.stringify(post)
  }).then((res) => res.json())
    .then((res) => dispatch(responseFunction(res)));
};

export const removePost = (id, responseFunction, dispatch) => {
  fetch(`${api}/posts/${id}`, { headers,
      method: 'DELETE'
    }).then((res) => res.json())
    .then((res) => dispatch(responseFunction(res)));
};

export const upvotePostApi = (post, responseFuction, dispatch) =>
  fetch(`${api}/posts/${post.id}`, { headers,
      method: 'POST',
      body: JSON.stringify({option: "upVote"})
    }).then((res) => res.json())
    .then((res) => dispatch(responseFuction(res)));

export const downvotePostApi = (post, responseFuction, dispatch) =>
  fetch(`${api}/posts/${post.id}`, { headers,
      method: 'POST',
      body: JSON.stringify({option: "downVote"})
    }).then((res) => res.json())
    .then((res) => dispatch(responseFuction(res)));

export const upvoteCommentApi = (comment, responseFuction, dispatch) => {
  fetch(`${api}/comments/${comment.id}`, { headers,
      method: 'POST',
      body: JSON.stringify({option: "upVote"})
    }).then((res) => res.json())
    .then((res) => dispatch(responseFuction(res)));
};

export const downvoteCommentApi = (comment, responseFuction, dispatch) =>
  fetch(`${api}/comments/${comment.id}`, { headers,
      method: 'POST',
      body: JSON.stringify({option: "downVote"})
    }).then((res) => res.json())
    .then((res) => dispatch(responseFuction(res)));

export const createComment = (comment, responseFunction, dispatch) => {
  comment.id = Math.random().toString().substr(-16);
  comment.timestamp = Date.now();
  fetch(`${api}/comments`, { headers,
    method: 'POST',
    body: JSON.stringify(comment)
  }).then((res) => res.json())
  .then((res) => dispatch(responseFunction(res)));
};

export const removeCommentApi = (id, responseFunction, dispatch) => {
  fetch(`${api}/comments/${id}`, { headers,
      method: 'DELETE'
    }).then((res) => res.json())
    .then((res) => dispatch(responseFunction(res)));
};

export const editCommentApi = (comment, responseFunction, dispatch) => {
  fetch(`${api}/comments/${comment.id}`, { headers,
    method: 'PUT',
    body: JSON.stringify(comment)
  }).then((res) => res.json())
    .then((res) => dispatch(responseFunction(res)));
};