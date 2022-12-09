import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en hook useForm", () => {
  const initialState = {
    name: "miguelangell1994",
    value: "miguelangell1994@hotmail.com",
  };
  test("debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialState));
    // console.log(result.current)
    expect(result.current).toEqual({
      name: initialState.name,
      value: initialState.value,
      formState: initialState,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("debe cambiar el nombre del formulario", () => {
    const newValue = "Miguel";
    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange, formState } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } }); //Realiza el cambio del value y name de estado inicial simulando ingreso por el input
    });
    // console.log(result);
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });
  test("debe realizar el reset del formulario", () => {
    const newValue = "Miguel";
    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } }); //Realiza el cambio del value y name de estado inicial simulando ingreso por el input
      onResetForm(); //Resetea el formulario a lo valores del estado incial
    });
    console.log(result);
    expect(result.current.name).toBe(initialState.name);
    expect(result.current.formState.name).toBe(initialState.name);
  });
});
