import React from "react";
import Card from "../ui/Card.component";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  function deleteTodo() {
    alert(props.fecha)
  }

  return (
    <Card>
      <h2 className={classes.title}> {props.title} </h2>
      <p className={classes.description}> {props.description} </p>
      <p className={classes.fecha}> {props.fecha} </p>
      <div className={classes.actions}>
        <button className="btn" onClick={deleteTodo}>
          Borrar
        </button>
      </div>
    </Card>
  );
}

export default TodoItem;
