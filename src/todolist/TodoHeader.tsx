/** @jsx jsx */
import React from "react";
import { jsx, css, useTheme } from "@emotion/react";

interface Todo {
  id: Number;
  text: String;
  checked: Boolean;
}
interface TodoHeaderProps {
  todo: Todo[];
  onSearchHandler(e: any): void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ todo, onSearchHandler }) => {
  const undoneTasks = todo.filter((todos) => !todos.checked);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const theme = useTheme() as any;

  const header__main_title = css({
    color: `${theme.headerMainTitleText}`,
    fontSize: 50,
    textAlign: "center",
    "@media(min-width: 280px)": {
      fontSize: 30,
    },
    "@media(min-width: 480px)": {
      fontSize: 40,
    },
    "@media(min-width: 768px)": {
      fontSize: 50,
    },
  });

  const header__sub_title = css({
    color: `${theme.headerSubTitleText}`,
    transitionDuration: "0.2s",
    transitionProperty: "color",
    "@media(min-width: 280px)": {
      fontSize: 18,
    },
    "@media(min-width: 480px)": {
      fontSize: 24,
    },
    "@media(min-width: 768px)": {
      fontSize: 28,
    },
  });

  const header__content = css({
    color: "#CF6679",
    transitionDuration: "0.2s",
    transitionProperty: "color",
  });

  const header__input = css({
    fontSize: 20,
    width: '100%',
    height: 40,
    paddingLeft: 10,
    marginBottom: "0.5rem",
    color: `${theme.inputText}`,
    border: `1px solid ${theme.inputBorder}`,
    backgroundColor: `${theme.inputBackgroundColor}`,
  });


  return (
    <div>
      <div css={header__main_title}>TO-DO-LIST</div>
      <h1 css={header__sub_title}>
        {dateString} {dayName}
      </h1>
      <input
        css={header__input}
        onChange={onSearchHandler}
        placeholder="할일 검색하기"
      />
      <h2 css={header__content}>할 일 {undoneTasks.length}개 남음</h2>
    </div>
  );
};

export default TodoHeader;
