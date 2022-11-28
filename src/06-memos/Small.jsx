import React, { memo } from "react";

export const Small = memo(({ value }) => {  //memoriza el componente para no renderizarlo nuevamente
  console.log("Me volví a generar :(");
  return <small>{value}</small>;
});
