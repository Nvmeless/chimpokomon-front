import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input``;
const InputCheckbox = ({ ...props }) => {
  return <StyledInput type={"checkbox"} {...props}></StyledInput>;
};

export default InputCheckbox;
