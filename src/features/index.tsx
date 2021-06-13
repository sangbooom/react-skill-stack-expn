import todosReducer from "../todolist/Todo";
import {
  combineReducers,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export default combineReducers({
  todos: todosReducer,
});

export interface Todos {
  id: string;
  text: string;
  checked: boolean;
}

interface TodoList {
  list: Todos[];
}

function dummyData() {
  const data = [];
  for(let i=0; i<1000; i++){
    data.push({id: `${i}`, text: `${i}`, checked: false});
  }
  return data;
}

const initialState: TodoList = {
  // list: JSON.parse(localStorage.getItem("todo")!) || [], // Non-null assertion operator, ! 는 앞의 값이 확실히 null이나 undefined가 아니라는 걸 알리려고 할 때 쓴다.,
  list: dummyData(),
};
const actionPrefix = "TODOS";

const addTodos = createAction<object>(`${actionPrefix}/add`);
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`);
const removeTodos = createAction<object>(`${actionPrefix}/remove`);
const editTodos = createAction<object>(`${actionPrefix}/edit`);

const todoSlice = createSlice({
  name: actionPrefix,
  initialState,
  reducers: {
    add: ({ list }: TodoList, { payload: { text } }: PayloadAction<Todos>) => {
      const newTodo: Todos = {
        id: Math.random().toString(36).substring(2, 13),
        text: text.toString().trim(),
        checked: false,
      };
      list.unshift(newTodo);
      localStorage.setItem("todo", JSON.stringify(list));
    },
    toggle: ({ list }: TodoList, { payload: { id } }: PayloadAction<Todos>) => {
      const targetIndex = list.findIndex((item: Todos) => item.id === id);
      list[targetIndex].checked = !list[targetIndex].checked;
      localStorage.setItem("todo", JSON.stringify(list));
    },
    remove: ({ list }: TodoList, { payload: { id } }: PayloadAction<Todos>) => {
      list.splice(
        list.findIndex((todo) => todo.id === id),
        1
      );
      localStorage.setItem(
        "todo",
        JSON.stringify(list.filter((item: Todos) => item.id !== id))
      );
    },
    edit: (
      { list }: TodoList,
      { payload: { id, text } }: PayloadAction<Todos>
    ) => {
      const targetIndex = list.findIndex((item: Todos) => item.id === id);
      list[targetIndex].text = text;
      localStorage.setItem("todo", JSON.stringify(list));
    },
  },
});

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: Todos[]) => list
);

export const actions = {
  addTodos,
  toggleTodos,
  removeTodos,
  editTodos,
};

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

console.log(todoSlice);

export type RootState = ReturnType<typeof rootReducer>;
