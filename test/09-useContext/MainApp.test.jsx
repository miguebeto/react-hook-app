import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Pruebas en componente <MainApp />", () => {
  test("debe mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
    screen.debug();
  });
  test("debe mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}> 
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
    screen.debug();
  });
});
