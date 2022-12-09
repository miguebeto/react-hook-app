import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en hook useCounter.jsx", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter()); //forma de rederizar un hooks
    // console.log(result)
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function)); //Evalua que increment sea una función
    expect(decrement).toEqual(expect.any(Function)); //Evalua que increment sea una función
    expect(reset).toEqual(expect.any(Function)); //Evalua que increment sea una función
  });
  test("Debe generar el valor del counter en 100", () => {
    const { result } = renderHook(() => useCounter(100)); //forma de rederizar un hooks
    // console.log(result)
    expect(result.current.counter).toBe(100); // evalua que counter actualizó el estado con el valor pasado por props
  });
  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter()); //forma de rederizar un hooks
    const { counter, increment } = result.current;
    act(() => {
      // se utiliza cuando se desea actualizar un estado de react
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13); // evalua que counter actualizó el estado con el valor actual(current) luego de cambiar
  });
  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter()); //forma de rederizar un hooks
    const { counter, decrement } = result.current;
    act(() => {
      // se utiliza cuando se desea actualizar un estado de react
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(7); // evalua que counter actualizó el estado con el valor actual(current) luego de cambiar
  });
  test("Debe resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100)); //forma de rederizar un hooks
    const { reset, decrement } = result.current;
    act(() => {
      // se utiliza cuando se desea actualizar un estado de react
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(100); // evalua que counter actualizó el estado con el valor actual(current) luego de cambiar
    // console.log(result);
  });
});
