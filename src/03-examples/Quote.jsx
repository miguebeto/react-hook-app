import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ data }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect(); //para obtener datos del elemento cuando cambia ej: el tamaño
    setBoxSize({width, height})
  }, []);

  return (
    <>
      <blockquote style={{ display: "flex" }} className="blockquote text-end">
        <p ref={pRef} className="mb-1">
          {data[0].quote}
        </p>
        <footer className="blockquote-footer">{data[0].author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
