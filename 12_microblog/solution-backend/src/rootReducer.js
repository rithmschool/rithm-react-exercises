const INITIAL_STATE = {
  posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === "FETCH_POSTS") {
    return { ...state, posts: action.posts };
  } else if (action.type === "ADD_POST") {
    return { ...state, posts: [...state.posts, action.post] };
  } else if (action.type === "REMOVE_POST") {
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.id)
    };
  }
  return state;
}
