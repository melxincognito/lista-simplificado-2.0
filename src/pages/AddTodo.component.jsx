import React from "react";
import NewTodoForm from "../components/form/NewTodoForm.component";
import { useNavigate } from 'react-router-dom';


function AddTodosPage() {
  const navigate = useNavigate();

  function addTodoHandler(todoData) {
    fetch(
      "https://lista-simplificado-2-default-rtdb.firebaseio.com/todosMisTareas.json",
      {
        method: "POST",
        body: JSON.stringify(todoData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/')
    });
  }

  return (
    <div>
      <h1>Añadir Tarea</h1>
      <div>
           <NewTodoForm onAddTodo={addTodoHandler}/>
      </div>

   
    </div>
  );
}

export default AddTodosPage;
