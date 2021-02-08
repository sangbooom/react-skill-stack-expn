import todosReducer from "../todolist/Todo";
import {
  combineReducers,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { generate as generateRandomStr } from "randomstring";

export default combineReducers({
  todos: todosReducer,
});

export interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export interface TodoList {
  list: Todo[];
}

const initialState: TodoList = {
  list: [],
};
const actionPrefix = "TODOS";
const addTodos = createAction<object>(`${actionPrefix}/add`); //?? 왜쓰지 createSlice면 한방 아니였나? reducer 쓰려고
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`);

const todoSlice = createSlice({
  name: actionPrefix,
  initialState,
  reducers: {
    add: (
      { list }: TodoList,
      { payload: { text, checked } }: PayloadAction<Todo>
    ) => {
      const newTodo: Todo = {
        id: generateRandomStr(5),
        text: text.toString(),
        checked,
      };
      list.push(newTodo);
    },
    // toggle: () => {

    // },
    // remove: () => {

    // },
    // edit: () => {

    // },
  },
});

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: Todo[]) => list
);

export const actions = {
  addTodos,
  toggleTodos
};

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

console.log(todoSlice);

export type RootState = ReturnType<typeof rootReducer>;
