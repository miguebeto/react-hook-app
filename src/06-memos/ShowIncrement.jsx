import React from "react";

// memo no lo puede memorizar usandolo solo porque viene de un funcion que cuando cambia apunta a una posicion diferente de memoria entonces al aumentar siempre es diferente
//debe usarse con ayuda del useCallback y un call back dentro del componete padre
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volví a generar :(");

  return (
    <button 
        onClick={() => increment(5)}  
        className="btn btn-primary"
        >
      Incrementar
    </button>
  );
});
