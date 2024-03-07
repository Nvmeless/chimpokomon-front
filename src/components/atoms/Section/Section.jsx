import React, { useContext } from "react";
import { styled } from "styled-components";
import { NestingProvider, NestingContext } from "../../../contexts/";

const StyledSection = styled.section`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

const Section = ({ children }) => {
  const nestContext = useContext(NestingContext);
  return (
    <StyledSection>
      <NestingProvider value={nestContext + 1}>{children}</NestingProvider>
    </StyledSection>
  );
};

export default Section;
