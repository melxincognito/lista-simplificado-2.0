import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Listas Simplificado</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <p>Todos Mis Tareas</p>
            </Link>
          </li>
          <li>
            <Link to="/tareasImportantes">
              <p>Tareas Importantes</p>
            </Link>
          </li>
          <li>
            <Link to="/anadirTarea">
              <p>Añadir Tarea</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
