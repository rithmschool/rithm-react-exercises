// import * as actions from "./actionTypes";
import {
  FETCH_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./actionTypes";

const INITIAL_STATE = {
  posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === FETCH_POSTS) {
    return { ...state, posts: action.posts };
  } else if (action.type === ADD_POST) {
    return {
      ...state,
      posts: [...state.posts, { ...action.post, comments: [] }]
    };
  } else if (action.type === REMOVE_POST) {
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.id)
    };
  } else if (action.type === UPDATE_POST) {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          return { ...post, title: action.title, body: action.body };
        }
        return { ...post };
      })
    };
  } else if (action.type === VOTE) {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          return { ...post, votes: action.votes };
        }
        return { ...post };
      })
    };
  } else if (action.type === ADD_COMMENT) {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.post_id) {
          return {
            ...post,
            comments: [...post.comments, { ...action.comment }]
          };
        }
        return { ...post };
      })
    };
  } else if (action.type === REMOVE_COMMENT) {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.post_id) {
          return {
            ...post,
            comments: post.comments.filter(
              comment => comment.id !== action.comment_id
            )
          };
        }
        return { ...post };
      })
    };
  }
  return state;
}
