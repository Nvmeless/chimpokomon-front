import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
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
      //   const newState = [...state];

      const newTodoTask = {
        id: Date.now(),
        textInputValue: action.payload,
        checkBoxValue: false,
      };

      state.push(newTodoTask);
      //   newState.push(newTodoTask);
      //   return newState;
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => {
        return t.id === action.payload;
      });
      task.checkBoxValue = !task.checkBoxValue;
    },
    deleteTask: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlists: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlaylists.pending, (state, action) => {
        console.log("Pending");
        state.status = "loading";
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log("Success", action.payload);
        state.playlists = action.payload;
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        console.error("Error on t'as dit");
        state.status = "failed";
      });
  },
});

export const fetchPlaylists = createAsyncThunk(
  "playlist/fetchPlaylist",
  async (payload) => {
    const config = {
      url: "https://httpbin.org/get",
      method: "get",
    };
    const response = await axios(config)
      .then((res) => {
        console.log("HttpBin repondru ", res);
        return res;
      })
      .catch((err) => {
        console.error("Error: ", err);
        return err;
      });

    return response.data;
  }
);

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    playlists: playlistSlice.reducer,
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
