import React, { useState, useRef, useCallback } from "react";
import Todolist from "./Todolist";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";

const Todo: React.FC = () => {
  interface Todo {
    id: number;
    text: string;
    checked: Boolean;
  }
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>(
    // JSON.parse(localStorage.getItem("todo")!) || [] // Non-null assertion operator, ! 는 앞의 값이 확실히 null이나 undefined가 아니라는 걸 알리려고 할 때 쓴다.
    []
  );
  let nextId = useRef(1);

  // const addTodo = (todo: Todo) => {
  //   todos = [...TodoInsert, todo];
  // }

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!todoInput) {
        alert("할 일을 입력해주세요");
        return;
      }

      const todos: Todo = {
        id: nextId.current++,
        text: todoInput,
        checked: false,
      };

      setTodo(todo.concat(todos));

      localStorage.setItem("todo", JSON.stringify(todo.concat(todos)));
      // setTodo([
      //   ...todo,
      //   { id: nextId.current++, text: todoInput, checked: false },
      // ]);
      setTodoInput("");
    },
    [todo, todoInput]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
    // console.log(e.target.value); //throttle
  };

  const onDeleteHandler = useCallback(
    (todoId:number): void => {
      setTodo(todo.filter((todos) => todos.id !== todoId));
      localStorage.setItem(
        "todo",
        JSON.stringify(todo.filter((todos) => todos.id !== todoId))
      );
    },
    [todo]
  );

  const onCheckToggleHandler = useCallback(
    (todoId:number): void => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, checked: !todos.checked } : todos
        )
      );
      console.log(todo);
    },
    [todo]
  );

  const onEditHandler = useCallback(
    (todoId:number, editedText:string): void => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, text: editedText } : todos
        )
      );
      setTodoInput("");
    },
    [todo]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TodoHeader todo={todo} />
      <TodoInsert
        onSubmitHandler={onSubmitHandler}
        onChangeInput={onChangeInput}
        todoInput={todoInput}
      />
      <div style={{ overflowY: "auto", height: 650 }}>
        <Todolist
          todo={todo}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
