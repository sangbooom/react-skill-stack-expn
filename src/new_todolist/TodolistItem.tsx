import React, { ChangeEvent, useState } from "react";
// import { Input } from "antd";
interface Todo {
  id: number;
  text: string;
  checked: Boolean;
}
interface TodolistItemProps {
  todos: Todo;
  onDeleteHandler(todoId:number): void;
  onCheckToggleHandler(todoId:number): void;
  onEditHandler(todoId:number, editedText:string): void;
}
const TodolistItem: React.FC<TodolistItemProps> = ({
  todos,
  onDeleteHandler,
  onCheckToggleHandler,
  onEditHandler,
}) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [edit, setEdit] = useState<string>(todos.text);

  const onToggleHandler = (todoId:number) => {
    if (!toggle && todos.text !== edit) {
      onEditHandler(todoId, edit);
    }
    setToggle(!toggle);
  };

  const onChangeText = (e : ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value);
  };

  const onChangeHandler = () => {
    if (!toggle) {
      return;
    }
    onCheckToggleHandler(todos.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        marginTop: 10,
        marginBottom: 10,
        border: '0.3px solid #f0f0f0',
        borderRadius: 10,
      }}
    >
      <div
        onClick={onChangeHandler}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {todos.checked && toggle ? (
          <>
            <div
              style={{ width: 20, height: 20, backgroundColor: "#45ffd0" }}
            ></div>
            <div style={{ textDecoration: "line-through", marginLeft: 10 }}>
              {todos.text}
            </div>
          </>
        ) : toggle ? (
          <>
            <div
              style={{
                width: 20,
                height: 20,
                boxSizing: "border-box",
                border: "1px solid black",
                marginRight: 10,
              }}
            ></div>
            {todos.text}
          </>
        ) : (
          <input
            onChange={onChangeText}
            value={edit}
          />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div onClick={() => onToggleHandler(todos.id)}>
          {toggle ? "수정" : "적용"}
        </div>
        <div
          onClick={() => onDeleteHandler(todos.id)}
          style={{ marginRight: 20, marginLeft: 20 }}
        >
          삭제
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodolistItem);
