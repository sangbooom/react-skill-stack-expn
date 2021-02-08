/** @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from "react";
import Todolist from "./Todolist";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";
import { jsx, css, useTheme } from "@emotion/react";
import { debounce } from "lodash";
import { useWindowSize } from '../hooks/useWindowSize';

interface Todo {
  id: number;
  text: string;
  checked: Boolean;
}
interface TodoProps {
  isDark: boolean;
  setDark: (value: boolean) => void; // setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Todo: React.FC<TodoProps> = ({ isDark, setDark }) => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todo")!) || [] // Non-null assertion operator, ! 는 앞의 값이 확실히 null이나 undefined가 아니라는 걸 알리려고 할 때 쓴다.
  );
  const [keyword, setKeyword] = useState<string>("");
  const [footerHeight, setFooterHeight] = useState<number>(0);

  let nextId = useRef(1);
  // let nextId = useRef((Math.max(...JSON.parse(localStorage.getItem("todo")!).map((todos: any) => todos.id)) + 1) | 1 );

  const theme = useTheme() as any;
  const size = useWindowSize() as any;

  useEffect(() => {
    const containerDiv = document.getElementById("container")?.clientHeight;
    setFooterHeight(containerDiv as any);
  },[]);

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

  const debounceHandler = debounce((evt) => {
    setKeyword(evt);
  }, 500);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    debounceHandler(e.target.value);
  };

  ////////////////////////////////////////////////////////

  const container = css({
    height: "100%",
    backgroundColor: `${theme.background}`,
    color: `${theme.text}`,
    textAlign: "center",
    transitionDuration: "0.2s",
    transitionProperty: "color, background-color",
  });

  const wrapper = css({
    maxWidth: 540,
    marginLeft: "auto",
    marginRight: "auto",
    "@media(min-width: 280px)": {
      paddingLeft: 10,
      paddingRight: 10,
    }
  });

  const content = css({
    overflowY: "auto",
    height: 520,
    marginBottom: 40,
  });

  const footer = css({
    padding: 5,
    width: 90,
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
    "@media(min-width: 280px)": {
      marginBottom: 40,
    },
    "@media(min-width: 768px)": {
      marginBottom: size.height- footerHeight,
    },
  })

  return (
    <div
      id="container"
      css={container}
      // css={css`
      //   background-color: ${theme.background};
      //   color: ${theme.text};
      //   text-align: center;
      //   height: 100vh;
      //   transition-duration: 0.2s;
      //   transition-property: background-color, color;
      // `}
    >
      <div css={wrapper}>
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
        <button
          css={footer}
          onClick={() => {
            setDark(!isDark);
          }}
        >
          {isDark ? "light mode" : "dark mode"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
