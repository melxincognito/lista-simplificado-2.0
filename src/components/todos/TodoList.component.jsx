import React from 'react';
import TodoItem from './TodoItem.component';
import classes from './TodoList.module.css'

function TodoList(props) {
    return (
      <ul className={classes.list}>
        {props.todos.map((meetup) => (
          <TodoItem
            key={meetup.id}
            id={meetup.id}
            fecha={meetup.fecha}
            title={meetup.title}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  }

  export default TodoList;