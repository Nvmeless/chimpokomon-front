import React from "react";
import { ListItem, InputCheckbox, InputText, Button } from "../../atoms";

const TodoTask = ({
  textInputValue,
  checkBoxValue,
  onChangeValue,
  onCheck,
  onDelete,
}) => {
  return (
    <ListItem>
      <InputText onChange={onChangeValue} value={textInputValue} />
      <InputCheckbox onChange={onCheck} checked={checkBoxValue} />
      <Button text="X" onClick={onDelete}></Button>
    </ListItem>
  );
};

export default TodoTask;
