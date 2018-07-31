import React from "react";
import { connect } from "react-redux";
import "./TitleList.css";
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
              <i
                className="fas fa-times fa-2x ml-auto text-danger"
                onClick={() => this.props.removePostFromAPI(post.id)}
              />
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

export default connect(
  mapStateToProps,
  { removePostFromAPI }
)(TitleList);
