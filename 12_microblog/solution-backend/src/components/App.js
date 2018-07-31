import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import PostList from "../containers/PostList";
import TitleList from "../containers/TitleList";
import NewPostForm from "../containers/NewPostForm";
import { Route, Link, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Link to="/posts/new">Add a new post</Link> | &nbsp;
          <Link to="/">Go Home</Link>
          <header className="App-header jumbotron">
            <h1 className="App-title display-4">Microblog</h1>
            <p className="lead">Get in the Rithm of blogging!</p>
          </header>
          <Switch>
            <Route exact path="/posts/new" component={NewPostForm} />
            <Route
              exact
              path="/"
              component={() => (
                <div className="row">
                  <div className="col-sm">
                    <TitleList />
                  </div>
                  <div className="col-sm">
                    <PostList />
                  </div>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
