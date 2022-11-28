import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "miguelangell1994",
    email: "miguelangell1994@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //identifica el nombre del input donde se encuentra digitando y setea el valor por el que se digita
    });
  };

  useEffect(() => {
    // console.log('useEffect called')
  }, []);

  useEffect(() => {
    // console.log('formState changed')
  }, [formState]);

  useEffect(() => {
    // console.log("Email changed")
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "miguelangell199" && <Message />}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="miguelangell1994@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
