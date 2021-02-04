/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

interface TodoInsertProps {
  onSubmitHandler(e: any): void;
  onChangeInput(e: any): void;
  todoInput: string;
}
const TodoInsert: React.FC<TodoInsertProps> = ({
  onSubmitHandler,
  todoInput,
  onChangeInput,
}) => {
  return (
    <form onSubmit={onSubmitHandler} css={content_wrapper__form}>
      <input
        css={content_wrapper__input}
        onChange={onChangeInput}
        value={todoInput}
      />
      <button css={{ width: 50 }}>추가</button>
    </form>
  );
};

export default TodoInsert;

const content_wrapper__form = css({
  display: "flex",
  marginBottom: 20,
});

const content_wrapper__input = css({
  width: 500,
  fontSize: 20,
});
