/** @jsx jsx */
import React from "react";
import TodolistItem from "./TodolistItem";
import { jsx } from "@emotion/react";
import { Todos } from "../features";

// interface Todo {
//   id: string;
//   text: string;
//   checked: Boolean;
// }
interface TodolistProps {
  todo: Todos[];
  onDeleteHandler(todoId: string): void;
  onCheckToggleHandler(todoId: string): void;
  onEditHandler(todoId: string, editedText: string): void;
}

const Todolist: React.FC<TodolistProps> = ({
  todo,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  return (
    <React.Fragment>
      {todo.map((todos: Todos) => (
        <TodolistItem
          key={todos.id}
          todos={todos}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
        />
      ))}
    </React.Fragment>
  );
};

export default Todolist;
