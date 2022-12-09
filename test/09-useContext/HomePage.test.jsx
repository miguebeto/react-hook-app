import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/UserContext";

describe("Preubas en el componente <HomePage />", () => {
  const user = {
    id: 1,
    name: "Miguel",
  };

  test("debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre"); // selecciona la etiqueta pre mediante aria-label en el componente
    expect(preTag.innerHTML).toBe("null"); // se espera que de vuelva el valor de null como string que pasamos en el contexto
    // screen.debug();
  });
  test("debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // selecciona la etiqueta pre mediante aria-label en el componente
    expect(preTag.innerHTML).toContain(user.name); // Se espera que el pre contenga el valor del usuario mandando por el contexto
    expect(preTag.innerHTML).toContain(user.id.toString()); // Se espera que el pre contenga el valor del id de user como string(JSON.strngify) mandado por el contexto
    screen.debug();
  });
});
