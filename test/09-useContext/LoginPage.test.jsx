import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/UserContext";

describe("Pruebas en <LoginPage />", () => {
  test("debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre"); // selecciona la etiqueta pre mediante aria-label en el componente
    expect(preTag.innerHTML).toBe("null"); // se espera que de vuelva el valor de null como string que pasamos en el contexto
    // screen.debug();
  });
  test("debe llamar el setUser cuando se hace click en el botón", () => {
    const setUserMock = jest.fn(); //mock de la funcion seteadora del estado en el use context

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const addUser = screen.getByRole("button"); //Selecciona el botón que se encuentra en el componente
    fireEvent.click(addUser); //simula la ejecución del botón seleccionado
    expect(setUserMock).toHaveBeenCalledWith({
      email: "miguelangell1994@hotmail.com",
      id: 123,
      name: "Miguel Angel",
    }); //Se espera que la función fué llamada con el argumento del objeto enviado en el componente
    //   screen.debug();
  });
});
