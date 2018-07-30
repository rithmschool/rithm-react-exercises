import React from "react";
import { connect } from "react-redux";
import { removePostFromAPI } from "../actionCreators";

class TitleList extends React.Component {
  render() {
    return (
      <div className="TitleList card">
        <h2 className="card-header">Titles</h2>
        <ul className="list-group">
          {this.props.posts.map(post => (
            <li key={post.id} className="list-group-item">
              {post.title}
              <button
                onClick={() => this.props.dispatch(removePostFromAPI(post.id))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(TitleList);
