import React, { Component } from "react";
import "./App.css";
import PostList from "./PostList";
import TitleList from "./TitleList";
import NewPostForm from "./NewPostForm";

class App extends Component {
  state = {
    posts: [
      { title: "Why Does the Sun Shine?", body: "Blah blah blah" },
      { title: "Why Is the Sky Blue?", body: "Blah blah blah" }
    ]
  };

  handleAdd = (title, body) => {
    this.setState(state => ({
      posts: [...state.posts, { title, body }]
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header jumbotron">
            <h1 className="App-title display-4">Microblog</h1>
            <p className="lead">Get in the Rithm of blogging!</p>
          </header>
          <div className="row">
            <div className="col-sm">
              <TitleList posts={this.state.posts} />
            </div>
            <div className="col-sm">
              <PostList posts={this.state.posts} />
              <NewPostForm handleAdd={this.handleAdd} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
