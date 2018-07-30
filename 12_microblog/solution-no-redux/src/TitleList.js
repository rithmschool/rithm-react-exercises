import React from 'react';

class TitleList extends React.Component {
  render() {
    return (
      <div className="TitleList card">
        <h2 className="card-header">Titles</h2>
        <ul class="list-group">
          {this.props.posts.map(post => (
            <li class="list-group-item">{post.title}</li>
          ))}
        </ul>

      </div>
    )
  }
}

export default TitleList;