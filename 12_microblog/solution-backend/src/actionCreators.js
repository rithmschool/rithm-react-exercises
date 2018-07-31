import axios from "axios";
import {
  FETCH_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./actionTypes";

export function getPostsFromAPI() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3000/api/posts");
    return dispatch(getPosts(response.data));
  };
}

function getPosts(posts) {
  return {
    type: FETCH_POSTS,
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
    type: ADD_POST,
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
    type: REMOVE_POST,
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
    type: UPDATE_POST,
    id,
    title,
    body
  };
}

export function sendVoteToAPI(id, direction) {
  return async function(dispatch) {
    const response = await axios.post(
      `http://localhost:3000/api/posts/${id}/vote/${direction}`
    );
    return dispatch(vote(response.data));
  };
}

function vote(obj) {
  return {
    type: VOTE,
    id: obj.id,
    votes: obj.votes
  };
}

export function removeCommentFromAPI(post_id, comment_id) {
  return async function(dispatch) {
    await axios.delete(
      `http://localhost:3000/api/posts/${post_id}/comments/${comment_id}`
    );
    return dispatch(removeComment(post_id, comment_id));
  };
}

function removeComment(post_id, comment_id) {
  return {
    type: REMOVE_COMMENT,
    post_id,
    comment_id
  };
}

export function sendCommentToAPI(post_id, text) {
  return async function(dispatch) {
    const result = await axios.post(
      `http://localhost:3000/api/posts/${post_id}/comments/`,
      {
        text
      }
    );
    return dispatch(addComment(post_id, result.data));
  };
}

function addComment(post_id, comment) {
  return { type: ADD_COMMENT, post_id, comment };
}
