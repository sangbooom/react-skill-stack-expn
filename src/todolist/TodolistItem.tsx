/** @jsx jsx */
import React, { ChangeEvent, useState } from "react";
import { jsx, css } from "@emotion/react";

interface Todo {
  id: number;
  text: string;
  checked: Boolean;
}
interface TodolistItemProps {
  todos: Todo;
  onDeleteHandler(todoId: number): void;
  onCheckToggleHandler(todoId: number): void;
  onEditHandler(todoId: number, editedText: string): void;
}
const TodolistItem: React.FC<TodolistItemProps> = ({
  todos,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [edit, setEdit] = useState<string>(todos.text);

  const onToggleHandler = (todoId: number) => {
    if (!toggle && todos.text !== edit) {
      onEditHandler(todoId, edit);
    }
    setToggle(!toggle);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value);
  };

  const onChangeHandler = () => {
    if (!toggle) {
      return;
    }
    onCheckToggleHandler(todos.id);
  };

  return (
    <div css={content_wrapper}>
      <div onClick={onChangeHandler}>
        {todos.checked && toggle ? (
          <React.Fragment>
            <div css={content__button__change_true} />
            <div css={content__text__change_true}>{todos.text}</div>
          </React.Fragment>
        ) : toggle ? (
          <React.Fragment>
            <div css={content__button__change_false} />
            {todos.text}
          </React.Fragment>
        ) : (
          <input onChange={onChangeText} value={edit} />
        )}
      </div>
      <div css={content__button__toggle}>
        <div onClick={() => onToggleHandler(todos.id)}>
          {toggle ? "수정" : "적용"}
        </div>
        <div onClick={() => onDeleteHandler(todos.id)}>삭제</div>
      </div>
    </div>
  );
};

export default React.memo(TodolistItem);

const content_wrapper = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  border: "0.3px solid #f0f0f0",
  borderRadius: 10,
  "& div": {
    display: "flex",
    flexDirection: "row",
  },
});

const content__button__change_true = css({
  width: 20,
  height: 20,
  backgroundColor: "#45ffd0",
});

const content__text__change_true = css({
  textDecoration: "line-through",
  marginLeft: 10,
});

const content__button__change_false = css({
  width: 20,
  height: 20,
  boxSizing: "border-box",
  border: "1px solid black",
  marginRight: 10,
});

const content__button__toggle = css({
  "& div": {
    marginRight: 20,
  },
});
