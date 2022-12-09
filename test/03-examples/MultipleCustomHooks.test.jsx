import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Preubas en componente <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(()=> {
    jest.clearAllMocks();
  })

  test("debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("BreakingBad Quotes")); //Prueba que el componente tenga el texto en el jsx
    expect(screen.getByText("Loading...")); //Prueba que el componente tenga el texto en el jsx

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton).toBeTruthy(); //verifica que se encuentre un botón con el nombre especificado
    const backButton = screen.getByRole("button", { name: "Back Quote" });
    expect(backButton).toBeTruthy(); //verifica que se encuentre un botón con el nombre especificado
    const resetButton = screen.getByRole("button", { name: "Reset Quote" });
    expect(resetButton).toBeTruthy(); //verifica que se encuentre un botón con el nombre especificado
    expect(nextButton.disable).toBeTruthy;
    // screen.debug();
  });
  test("debe mostrar el quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Miguel", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disable).toBeFalsy(); //se espera que al activarse el botón pase el disable del isloading.... a false
    screen.debug();
  });
  test("debe llamar la función incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Miguel", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled(); //se espera que la funcion incrementada sea llamada
    // screen.debug();
  });
});
