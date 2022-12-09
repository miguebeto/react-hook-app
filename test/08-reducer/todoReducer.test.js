import { todoReducer } from "../../src/08-reducer/todoReducer";

describe("Pruebas en el todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState); //Se epera que el resultado sea el initialState porque es el retorno de la condición por defecto del switch en el reducer
  });
  test("Debe agregar un todo ", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2); //Se epera que agrege un nuevo objeto con ambos estados
    expect(newState).toContain(action.payload); //Se epera que se ecuentre agregado el payload mandado através del action
  });
  test("debe eliminar un TODO", () => {
    const action = {
      type: "Delete Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0); //Se epera que elimine el estado que viene por defecto y el length quede en 1
  });
  test("debe realizar el toggle del todo", () => {
    const action = {
      type: "Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy(); //Se epera que el done del estado inicial pase a true
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy(); //Se epera que el done del estado inicial pase a false luego de la ejecución anterior
  });
});
