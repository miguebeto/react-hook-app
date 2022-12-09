import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={ todo.id }
      className="list-group-item d-flex justify-content-between"
    >
      <span
        aria-label='span'
        className={`align-self-center ${
        (todo.done) ? "text-decoration-line-through text-success" : " "
        }`}
        onClick={ () => onToggleTodo(todo.id) }
      >
        { todo.description }
      </span>
      <button onClick={ () => onDeleteTodo(todo.id) } className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
