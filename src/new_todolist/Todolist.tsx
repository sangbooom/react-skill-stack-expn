import React from "react";
import TodolistItem from "./TodolistItem";
interface TodolistProps {
  todo: [];
  onDeleteHandler: void
  onCheckToggleHandler: void
  onEditHandler: void
}
const Todolist: React.FC = ({
  todo,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  return todo.map((todos, index) => (
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
  ));
};

export default Todolist;
