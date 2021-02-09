/** @jsx jsx */
import React, { useState, useEffect, useCallback } from "react";
import Todolist from "./Todolist";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";
import { jsx, css, useTheme } from "@emotion/react";
import { debounce } from "lodash";
import { useWindowSize } from "../hooks/useWindowSize";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, actions, RootState, Todos } from "../features";

interface TodoProps {
  isDark: boolean;
  setDark: (value: boolean) => void; // setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Todo: React.FC<TodoProps> = ({ isDark, setDark }) => {
  const dispatch = useDispatch();
  const todoList = useSelector<RootState, Todos[]>((state) =>
    selectTodoList(state.todos)
  );
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [footerHeight, setFooterHeight] = useState<number>(0);

  const theme = useTheme() as any;
  const size = useWindowSize() as any;

  useEffect(() => {
    setTodo(todoList);
  }, [todoList]);

  useEffect(() => {
    const containerDiv = document.getElementById("container")?.clientHeight;
    setFooterHeight(containerDiv as any);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!todoInput) {
        alert("할 일을 입력해주세요");
        return;
      }
      dispatch(actions.addTodos({ text: todoInput, checked: false }));
      setTodoInput("");
    },
    [dispatch, todoInput]
  );

  const onDeleteHandler = useCallback(
    (todoId: string): void => {
      dispatch(actions.removeTodos({ id: todoId }));
    },
    [dispatch]
  );

  const onCheckToggleHandler = useCallback(
    (todoId: string): void => {
      dispatch(actions.toggleTodos({ id: todoId }));
    },
    [dispatch]
  );

  const onEditHandler = useCallback(
    (todoId: string, editedText: string): void => {
      dispatch(actions.editTodos({ id: todoId, text: editedText }));
      setTodoInput("");
    },
    [dispatch]
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
    },
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
      marginBottom: size.height - footerHeight,
    },
  });

  return (
    <div id="container" css={container}>
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
