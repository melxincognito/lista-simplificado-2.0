import React from "react";
import { useState, useEffect } from 'react';
import TodoList from "../components/todos/TodoList.component";


function AllTodosPage() {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadedTodos, setLoadedTodos ] = useState([]);

  useEffect(() => {
    setIsLoading(true);
      fetch('https://lista-simplificado-2-default-rtdb.firebaseio.com/todosMisTareas.json').then(response => {
      return response.json();
    }).then(data => {
      const todos = [];

      for (const key in data) {
        const todo = {
          id: key,
          ...data[key]
        }
        todos.push(todo)
      }

      setIsLoading(false);

      setLoadedTodos(todos);
    });
  }, []);

  

  if(isLoading) {
    return (
      <section> 
        <p> Subiendo Tareas . . . . </p>
      </section>
    )
  }

  return (
    <section>
      <h1> Todos los reuniones </h1>
      <TodoList todos={loadedTodos} />
    </section>

  )
}

export default AllTodosPage;
