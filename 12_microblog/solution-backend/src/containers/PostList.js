import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { getPostsFromAPI, removePostFromAPI } from "../actionCreators";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    return (
      <div className="PostList">
        {this.props.posts.map(post => (
          <Post
            handleRemove={() => this.props.removePostFromAPI(post.id)}
            id={post.id}
            key={post.id}
            post={post}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPostsFromAPI, removePostFromAPI }
)(PostList);
