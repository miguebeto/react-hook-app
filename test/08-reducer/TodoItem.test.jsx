import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-reducer/TodoItem";

describe("Pruebas en el componente <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el todo pendiente de completar", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem"); // Selecciona el elemento li del componente
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    ); //Verifica que la etiqueta li tenga el estilo que definimos en el componente

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center "); //verifica que el span con el aria label contenga las clase definida en el componente (tener en cuenta el espacio)
    // screen.debug(); //Para simular el resultado del componente
  });

  test("span debe de llamar el onToggleTodo cuando se hace click ", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span"); // Selecciona el elemento li del componente
    fireEvent.click(spanElement); //simula el evento click sobre el elemento con aria-label span

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id); //verifica que la función fue llamada con el argumento del id en el todo
  });

  test("button debe llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button"); // Selecciona el elemento li del componente
    fireEvent.click(deleteButton); //simula el evento click sobre el botón

    expect(onDeleteTodoMock).toHaveBeenCalled(); //verifica que el botton fué ejecutado llamando la función onDeleteTodoMock
  });
});
