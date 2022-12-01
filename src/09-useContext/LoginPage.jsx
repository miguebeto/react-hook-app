import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser, user } = useContext(UserContext); // 4. importamos el contexto donde lo queremos usar mediante el hook y el contexto como argumento

  return (
    <>
      <div>LoginPage</div>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setUser([
            ...user,
            {
            id: 123,
            name: "Miguel Angel",
            email: "miguelangell1994@hotmail.com",
            }
          ])
        }
        className="btn btn-primary"
      >
        Agregar Usuarios
      </button>
    </>
  );
};
