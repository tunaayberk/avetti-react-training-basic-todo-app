import React from "react";

const TodoItem = ({ title, status, id, done, del }) => {
  return (
    <div>
      <div
        className="item"
        style={
          status
            ? {
                width: "200px",
                display: "flex",
                justifyContent: "space-around",
                textDecoration: "underline"
              }
            : {
                textDecoration: "line-through",
                width: "200px",
                display: "flex",
                justifyContent: "space-around"
              }
        }
      >
        {title}
        <div>
          {status ? (
            <button onClick={() => done(id)}>✔</button>
          ) : (
            <>
              <button onClick={() => done(id)}>X</button>
              <button onClick={() => del(id)}>DEL</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
