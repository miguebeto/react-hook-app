//3. se crea el reducer que es una funcion que recibe un estado inicial que por lo general es un objeto y una acción
export const todoReducer = ( initialState = [], action ) => {
  //4. se crea el filtro del switch para identificar que accion se ejecutó y crear un nuevo objeto modificado
  switch ( action.type ) {
    case "Add Todo":
      return [ ...initialState, action.payload ];
    case "Delete Todo":
      return initialState.filter( ( todo ) => todo.id !== action.payload );
    case "Toggle Todo":
      return initialState.map(( todo ) => {
        if ( todo.id === action.payload ) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
