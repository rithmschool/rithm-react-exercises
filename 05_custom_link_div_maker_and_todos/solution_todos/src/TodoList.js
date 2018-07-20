import React, { Component } from "react";
import Todo from "./Todo";
import EditableTodo from "./EditableTodo";

export default class TodoList extends Component {
  render() {
    const todos = this.props.todos.map(todo => {
      if (todo.isEditing === false) {
        return (
          <Todo
            deleteTodo={() => this.props.deleteSingleTodo(todo.id)}
            toggleEdit={() => this.props.changeIsEditing(todo.id, true)}
            key={todo.id}
            task={todo.task}
          />
        );
      } else {
        return (
          <EditableTodo
            updateTodo={updatedObj =>
              this.props.updateSingleTodo(todo.id, updatedObj)
            }
            toggleEdit={() => this.props.changeIsEditing(todo.id, false)}
            key={todo.id}
            task={todo.task}
          />
        );
      }
    });
    return <ul>{todos}</ul>;
  }
}
