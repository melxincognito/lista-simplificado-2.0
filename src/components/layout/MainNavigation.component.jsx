import React from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Listas Simplificado</div>
      
        <ul>
          <li>Todos mis tareas</li>
          <li>Tareas Importantes</li>
          <li>Añadir Tarea</li>
        </ul>
    </header>

  );
}

export default MainNavigation;

