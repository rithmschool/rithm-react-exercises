import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { getPostsFromAPI } from "../actionCreators";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    return (
      <div className="PostList">
        {[...this.props.posts]
          .sort((a, b) => a.votes < b.votes)
          .map(post => <Post key={post.id} post={post} />)}
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
  { getPostsFromAPI }
)(PostList);
