import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialTodoState = [
  {
    id: 0,
    textInputValue: "Se calcifier la glande pinéale",
    checkBoxValue: true,
  },
  {
    id: 1,
    textInputValue: "Se calcifier la glande pinéale",
    checkBoxValue: false,
  },
  {
    id: 2,
    textInputValue: "Apprtendre le nolm des fleurs",
    checkBoxValue: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTask: (state, action) => {
      const newTodoTask = {
        id: Date.now(),
        textInputValue: action.payload,
        checkBoxValue: false,
      };
      state.push(newTodoTask);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { addTask } = todoSlice.actions;
