import React, { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0 , y: 0})

  useEffect(() => {
    // console.log("message mounted");

    const onMouseMove = ({ x, y }) => {
        setCoords({ x, y })
    };

    window.addEventListener("mousemove", onMouseMove);

    // window.addEventListener("mousemove", (e) => {
    //   console.log(e.x, e.y);
    // });

    return () => {
      //   console.log("message unmounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
};
