import React, { useState } from "react";
import { ListItem, List, InputText, Button } from "../../atoms";
import TodoTask from "../../molecules/TodoTask/TodoTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, toggleTask } from "../../../store";
const TodoList = () => {
  const todoTasks = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState(null);
  const handleChange = (e) => {
    setTodoTask(e.target.value);
  };
  const submit = () => {
    dispatch(addTask(todoTask));
  };
  return (
    <>
      <List>
        {todoTasks.map((x, i) => {
          console.log(x);
          return (
            <TodoTask
              onCheck={() => {
                dispatch(toggleTask(x.id));
              }}
              onDelete={() => {
                dispatch(deleteTask(x.id));
              }}
              onChangeValue={() => {}}
              {...x}
              key={i}
            ></TodoTask>
          );
        })}
      </List>

      <InputText onChange={handleChange}></InputText>
      <Button text={"Envoyer"} onClick={submit}></Button>
    </>
  );
};

export default TodoList;
