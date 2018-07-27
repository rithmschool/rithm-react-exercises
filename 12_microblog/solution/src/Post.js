import React from 'react';
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <h3>{this.props.post.title}</h3>
        <div>{this.props.post.body}</div>
      </div>
    )
  }
}

export default Post;