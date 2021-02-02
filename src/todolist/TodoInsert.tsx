import React from "react";
// import { Button, Input } from "antd";
interface TodoInsertProps {
  onSubmitHandler(e: any): void;
  onChangeInput(e: any): void;
  todoInput: string;
}
const TodoInsert: React.FC<TodoInsertProps> = ({ onSubmitHandler, todoInput, onChangeInput }) => {
  return (
    <form onSubmit={onSubmitHandler} style={{ display: "flex", marginBottom: 20 }}>
      <input
        style={{ width: 500, fontSize: 20 }}
        onChange={onChangeInput}
        value={todoInput}
      />
      <button>
        추가
      </button>
    </form>
  );
};

export default TodoInsert;
