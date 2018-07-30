import axios from "axios";

export function getPostsFromAPI() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3000/api/posts");
    return dispatch(getPosts(response.data));
  };
}

function getPosts(posts) {
  return {
    type: "FETCH_POSTS",
    posts
  };
}

export function sendPostToAPI(title, body) {
  return async function(dispatch) {
    const response = await axios.post("http://localhost:3000/api/posts", {
      title,
      body
    });
    return dispatch(addPost(response.data));
  };
}

function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

export function removePostFromAPI(id) {
  return async function(dispatch) {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    return dispatch(removePost(id));
  };
}

function removePost(id) {
  return {
    type: "REMOVE_POST",
    id
  };
}

export function updatePostInAPI(id, title, body) {
  return async function(dispatch) {
    await axios.patch(`http://localhost:3000/api/posts/${id}`, {
      title,
      body
    });
    return dispatch(updatePost(id, title, body));
  };
}

function updatePost(id, title, body) {
  return {
    type: "UPDATE_POST",
    id,
    title,
    body
  };
}
