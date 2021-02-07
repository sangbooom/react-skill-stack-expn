/** @jsx jsx */
import React from "react";
import { jsx, css, useTheme } from "@emotion/react";

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
  const theme = useTheme() as any;

  const content__button_confirm = css({
    width: 70,
    backgroundColor: `${theme.buttonBg}`,
    color: `${theme.text}`,
    border: `1px solid ${theme.buttonBorder}`,
    borderRadius: 4,
    transitionDuration: "0.2s",
    transitionProperty: "color, background-color",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `${theme.buttonBgHover}`,
      color: `${theme.buttonTextHover}`,
    },
  });

  const content_wrapper__form = css({
    display: "flex",
    marginBottom: 20,
  });

  const content_wrapper__input = css({
    color: `${theme.inputText}`,
    border: `1px solid ${theme.inputBorder}`,
    backgroundColor: `${theme.inputBackgroundColor}`,
    width: '100%',
    height: 40,
    paddingLeft: 10,
    fontSize: 20,
  });

  return (
    <form onSubmit={onSubmitHandler} css={content_wrapper__form}>
      <input
        css={content_wrapper__input}
        onChange={onChangeInput}
        value={todoInput}
      />
      <button css={content__button_confirm}>추가</button>
    </form>
  );
};

export default TodoInsert;
