import React, { useState } from "react";
import { UserContext } from "./UserContext";

const objeto = {
    id: 123,
    user: 'miguelangell1994',
    email: 'miguelangell1994@hotmail.com'
}

export const UserProvider = ({ children }) => {
  //2. crear el provider con importando el contexto como HOC, agregando .provider, value a pasar y elchildren para dejarlo disponible en los hijos

  const [ user, setUser ] = useState([
    // {
    // id: 123,
    // user: 'miguelangell1994',
    // email: 'miguelangell1994@hotmail.com'
    // }
]); 
// para pasar arreglo de objetos con objeto(usuario) por defecto
//   const [ user, setUser ] = useState();

  return (
    // <UserContext.Provider value={{ Hola: 'Hola mundo', objeto: objeto }}> {/* contexto de alto nivel */}
    <UserContext.Provider value={{ user, setUser }}>{/* paso de  funciones seteadoras y objetos en el provider mediante componente hijo */}
      {children}
    </UserContext.Provider>
  );
};
