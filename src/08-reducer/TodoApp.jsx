import React from "react";
import { TodoAdd, TodoList } from "./";
import { useTodos } from "../hooks/useTodos";
export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: { todosCount } ,<small> Pendientes: { pendingTodosCount }</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
          {/* Fin TodoList */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewtodo( todo ) */}
          {/* { id: newdate()..., descripcion: '', done: false } */}
          <TodoAdd onNewTodo={ handleNewTodo } />
          {/*Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
