import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Recolectar la piedra del alma",
    //   done: false,
    // }
  ]; //1. Se crea el estado inicial con con arreglo de objetos

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }; //8. pasa la informacion guradada localStorage al estado inicial del reducer luego de parsearla

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init); //2. se importa el useReducer asignando el estado, dispatch y como args el reducer y el estado inicial

  //5 se crea la función que lleva dentro el action(objeto) con el type, y el payload que se agregará
  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    //6. Se ejecuta el dispatch con la acción que se desea ejecutar para que el reducer la procese
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "Delete Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "Toggle Todo",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //7. Se setea el estado como string en el localStorage para mantener guardad la información

  return (
    <>
      <h1>
        TodoApp: 10,<small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
          {/* Fin TodoList */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewtodo( todo ) */}
          {/* { id: newdate()..., descripcion: '', done: false } */}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/*Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
