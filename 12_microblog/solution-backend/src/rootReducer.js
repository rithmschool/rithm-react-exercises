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
  } else if (action.type === "UPDATE_POST") {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          return { ...post, title: action.title, body: action.body };
        }
        return { ...post };
      })
    };
  } else if (action.type === "VOTE") {
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          return { ...post, votes: action.votes };
        }
        return { ...post };
      })
    };
  }
  return state;
}
