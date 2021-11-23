import React from "react";
import classes from './NewTodoForm.module.css';
import { useRef } from 'react';

function NewTodoForm(props) {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const fechaInputRef = useRef();
  
    function submitHandler(e) {
      e.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
      const enteredFecha = fechaInputRef.current.value;
  
      const todoData = {
        title: enteredTitle,
        description: enteredDescription,
        fecha: enteredFecha,
      };
  
      props.onAddTodo(todoData);
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Título</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label>Fecha</label>
        <input type="date" required id="fecha" ref={fechaInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Resumen</label>
        <textarea
          id="description"
          required
          rows="4"
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button> Añadir a mí lista </button>
      </div>
    </form>
  );
}

export default NewTodoForm;
