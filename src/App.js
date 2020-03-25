import React, { useState, useEffect } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = React.useState(1);

  const handleAddTodo = title => {
    const toDoTemp = {
      id: counter,
      title,
      status: true
    };
    const tempTodoList = [...todoList];
    tempTodoList.push(toDoTemp);
    setTodoList(tempTodoList);
    setCounter(counter + 1);
  };

  const handleChangeStatus = id => {
    const tempTodoList = [...todoList];

    tempTodoList.filter(
      todo => todo.id === id
    )[0].status = !tempTodoList.filter(todo => todo.id === id)[0].status;

    setTodoList(tempTodoList);
  };

  const handleDelete = id => {
    const tempTodoList = [...todoList.filter(todo => todo.id !== id)];

    setTodoList(tempTodoList);
  };

  useEffect(() => {
    if (todoList.length > 0) {
      console.log(todoList);
    }
  }, [todoList]);

  return (
    <div className="App">
      <header className="App-header">
        <TodoHeader add={handleAddTodo} />
      </header>
      <section>
        <TodoList
          todos={todoList}
          done={handleChangeStatus}
          del={handleDelete}
        />
      </section>
    </div>
  );
}

export default App;
