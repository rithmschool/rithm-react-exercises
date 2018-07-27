import React from 'react';
import Post from './Post';

class PostList extends React.Component {
  render() {
    return (
      <div className="PostList">
        {this.props.posts.map(post => (
          <Post post={post} />
        ))}
      </div>)
  }
}

export default PostList;