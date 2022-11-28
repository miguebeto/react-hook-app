import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formState.description.length <= 1) return; //verificar si el input no tiene valor no envia el todo
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    // onNewTodo && onNewTodo(newTodo);
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        value={description}
        onChange={onInputChange}
        name="description"
      />
      <button className="btn btn-outline-primary mt-2">Agregar</button>
    </form>
  );
};
