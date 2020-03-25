import React from "react";
import TodoItem from "./components/TodoItem";

const TodoList = ({ todos, done, del }) => {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} done={done} del={del} />;
      })}
    </div>
  );
};

export default TodoList;
