import { useState } from "react";

const ToDoList = () => {
  const [todoInputValue, setTodoInputValue] = useState("");
  
  const todoInputValueHandle = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTodoInputValue(value);
  };

  const todoSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todoInputValue);
    setTodoInputValue("");
  };
  return (
    <>
      <form onSubmit={todoSubmitHandle}>
        <input
          placeholder="write a to do"
          value={todoInputValue}
          onChange={todoInputValueHandle}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default ToDoList;
