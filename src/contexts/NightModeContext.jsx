import React, { createContext } from "react";

const NightModeContext = createContext(false);

const NightModeProvider = ({ value, ...props }) => {
  return (
    <NightModeContext.Provider value={value}>
      {props.children}
    </NightModeContext.Provider>
  );
};
export { NightModeContext, NightModeProvider };
