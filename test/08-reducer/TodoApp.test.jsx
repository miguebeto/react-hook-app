import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-reducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en <TodoApp />", () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: false },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  }); //extra los valores de retorno del hook

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect( screen.getByText('Todo #1') ).toBeTruthy(); //Verifica que el texto se encuentra en el componente
    expect( screen.getByText('Todo #2') ).toBeTruthy();
    expect( screen.getByRole('textbox') ).toBeTruthy(); //verifica que se encuentra un texbox en el componente
    
    screen.debug();
  });
});
