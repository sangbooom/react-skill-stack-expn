import React from "react";
interface TodoHeaderProps {
  todo: []
}
const TodoHeader: React.FC<TodoHeaderProps> = ({ todo }) => {
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
      <div style={{ fontSize: 50, textAlign:'center' }}>TO-DO-LIST</div>
      <h1>{dateString} {dayName}</h1>
      <h2>할 일 {undoneTasks.length}개 남음</h2>
    </div>
  );
};

export default TodoHeader;
