import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-reducer/todoReducer";

const initialState = []; //1. Se crea el estado inicial con con arreglo de objetos
const init = () => {
  return JSON.parse( localStorage.getItem( "todos" ) ) || [];
}; //8. pasa la informacion guradada localStorage al estado inicial del reducer luego de parsearla

export const useTodos = () => {
  const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init ); //2. se importa el useReducer asignando el estado, dispatch y como args el reducer, el estado inicial y el init(inicializer)

  //5 se crea la función que lleva dentro el action(objeto) con el type, y el payload que se agregará
  const handleNewTodo = ( todo ) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    //6. Se ejecuta el dispatch con la acción que se desea ejecutar para que el reducer la procese
    dispatchTodo( action );
  };

  useEffect(() => {
    localStorage.setItem( "todos", JSON.stringify( todos ) );
  }, [ todos ]); //7. Se setea el estado como string en el localStorage para mantener guardad la información

  const handleDeleteTodo = ( id ) => {
    dispatchTodo({
      type: "Delete Todo",
      payload: id,
    });
  };
  const handleToggleTodo = ( id ) => {
    dispatchTodo({
      type: "Toggle Todo",
      payload: id,
    });
  };


  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo=>!todo.done ).length,
  };
};
