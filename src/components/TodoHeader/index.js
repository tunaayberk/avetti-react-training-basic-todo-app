import React from "react";

const TodoHeader = ({ add }) => {
  const [title, setTitle] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    add(title);
  };

  return (
    <>
      <h1>Todo Header</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button>+</button>
      </form>
    </>
  );
};

export default TodoHeader;
