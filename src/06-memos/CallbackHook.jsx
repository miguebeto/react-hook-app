import React, { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
    setCounter( (c) => c + value);
  }, 
  [],
  );

//   const incrementFather = () => {
//       setCounter( counter + 1 )
//   } // no memoriza el cambio y siempre reredenriza el hijo

  useEffect(() => {
    // incrementFather();
  }, [incrementFather]) //si no se usa el usecallback con el memo produce un ciclo infinito porque siempre cambia y react no memoriza que es el mismo valor
  

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
