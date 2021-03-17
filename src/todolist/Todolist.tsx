/** @jsx jsx */
import React, { useCallback } from "react";
import TodolistItem from "./TodolistItem";
import { jsx } from "@emotion/react";
import { Todos } from "../features";
import { List } from "react-virtualized";

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
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todos = todo[index];
      return (
        <TodolistItem
          key={key}
          todos={todos}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
          style={style}
        />
      );
    },
    [todo, onDeleteHandler, onCheckToggleHandler, onEditHandler]
  );

  return (
    <List
      width={520}
      height={520}
      rowCount={todo.length}
      rowHeight={64}
      rowRenderer={rowRenderer}
      list={todo}
      style={{ outline: "none" }}
    />
  );
};

export default React.memo(Todolist);
