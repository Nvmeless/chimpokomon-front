import React, { useState } from "react";
import { styled } from "styled-components";

const StyledInput = styled.input``;
const InputText = ({ ...props }) => {
  // const [value, setValue] = useState("");
  // const handleText = (e) => {
  //   if (value !== e.target.value) {
  //     setValue(e.target.value);
  //   }
  // }
  return <StyledInput {...props} />;
};

export default InputText;
