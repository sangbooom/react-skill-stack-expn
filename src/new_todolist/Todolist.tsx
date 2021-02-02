import React from "react";
import TodolistItem from "./TodolistItem";

interface Todo {
  id: number;
  text: string;
  checked: Boolean;
}
interface TodolistProps {
  todo: Todo[];
  onDeleteHandler(todoId: number): void;
  onCheckToggleHandler(todoId: number): void;
  onEditHandler(todoId: number, editedText: string): void;
}

const Todolist: React.FC<TodolistProps> = ({
  todo,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  return (
    <React.Fragment>
      {todo.map((todos, index) => (
        <div
          key={index}
          style={{
            width: 500,
            height: 65,
          }}
        >
          <TodolistItem
            key={todos.id}
            todos={todos}
            onDeleteHandler={onDeleteHandler}
            onCheckToggleHandler={onCheckToggleHandler}
            onEditHandler={onEditHandler}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Todolist;
