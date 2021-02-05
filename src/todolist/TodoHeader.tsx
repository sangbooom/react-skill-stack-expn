/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

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
  return (
    <div>
      <div css={header__title}>TO-DO-LIST</div>
      <h1>
        {dateString} {dayName}
      </h1>
      <input css={header__input} onChange={onSearchHandler} placeholder="할일 검색하기" />
      <h2>할 일 {undoneTasks.length}개 남음</h2>
    </div>
  );
};

export default TodoHeader;

const header__title = css({
  fontSize: 50,
  textAlign: "center",
});

const header__input = css({
  width: 500,
  fontSize: 20,
});
