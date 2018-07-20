import React, { Component } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

class App extends Component {
  state = {
    todos: []
  };
  handleCreate = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  toggleEditing = (id, newValue) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isEditing: newValue };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  handleUpdate = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTodo.task, isEditing: false };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  render() {
    return (
      <div>
        <TodoList
          deleteSingleTodo={this.handleDelete}
          updateSingleTodo={this.handleUpdate}
          changeIsEditing={this.toggleEditing}
          todos={this.state.todos}
        />
        <NewTodoForm createTodo={this.handleCreate} />
      </div>
    );
  }
}

export default App;
