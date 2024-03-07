import React, { createContext } from "react";

const NestingContext = createContext(0);
const NestingProvider = ({ ...props }) => {
  return <NestingContext.Provider {...props} />;
};

export { NestingContext, NestingProvider };
