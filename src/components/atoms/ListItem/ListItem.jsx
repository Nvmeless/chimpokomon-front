import React from "react";
import { styled } from "styled-components";

const StyledListItem = styled.li`
  background-color: ${(props) => props.theme.secondary ?? "white"};
  color: ${(props) => props.theme.primary ?? "white"};
`;

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
