import React from "react";
import { ListItem, InputCheckbox, InputText } from "../../atoms";

const TodoTask = ({ textInputValue, checkBoxValue }) => {
  return (
    <ListItem>
      <InputText value={textInputValue} />
      <InputCheckbox checked={checkBoxValue} />
    </ListItem>
  );
};

export default TodoTask;
