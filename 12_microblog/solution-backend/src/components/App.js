import React, { Component } from "react";
import "./App.css";
import PostList from "../containers/PostList";
import TitleList from "../containers/TitleList";
import NewPostForm from "../containers/NewPostForm";

class App extends Component {
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
              <TitleList />
            </div>
            <div className="col-sm">
              <PostList />
              <NewPostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
