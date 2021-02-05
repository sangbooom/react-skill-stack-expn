/** @jsx jsx */
import React, { useState, useRef, useCallback } from "react";
import Todolist from "./Todolist";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";
import { jsx, css } from "@emotion/react";

const Todo: React.FC = () => {
  interface Todo {
    id: number;
    text: string;
    checked: Boolean;
  }
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todo")!) || [] // Non-null assertion operator, ! 는 앞의 값이 확실히 null이나 undefined가 아니라는 걸 알리려고 할 때 쓴다.
  );
  const [keyword, setKeyword] = useState<string>("");

  let nextId = useRef(1); //localstorage에 저장하고 새로고침하고 add하면 당연히 1부터니까 오류나지. 이것도 getItem으로 id받아오기

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
      setTodoInput("");
    },
    [todo, todoInput]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
    // console.log(e.target.value); //debounce
  };

  const onDeleteHandler = useCallback(
    (todoId: number): void => {
      setTodo(todo.filter((todos) => todos.id !== todoId));
      localStorage.setItem(
        "todo",
        JSON.stringify(todo.filter((todos) => todos.id !== todoId))
      );
    },
    [todo]
  );

  const onCheckToggleHandler = useCallback(
    (todoId: number): void => {
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
    (todoId: number, editedText: string): void => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, text: editedText } : todos
        )
      );
      setTodoInput("");
    },
    [todo]
  );

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  // const todoFilter = useCallback((): Todo[] => {
  //   return todo.filter((todos) => todos.text.indexOf(keyword) > -1);
  // }, [todo, keyword]);

  return (
    <div css={container}>
      <TodoHeader todo={todo} onSearchHandler={onSearchHandler} />
      <TodoInsert
        onSubmitHandler={onSubmitHandler}
        onChangeInput={onChangeInput}
        todoInput={todoInput}
      />
      <div css={content}>
        <Todolist
          todo={todo.filter((todos) => todos.text.indexOf(keyword) > -1)}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
        />
      </div>
    </div>
  );
};

export default Todo;

const container = css({
  maxWidth: 540,
  margin: "auto",
});

const content = css({
  overflowY: "auto",
  height: 650,
});
