import React, { useContext, useState } from "react";
import { Button } from "../../atoms";
import { FaMoon, FaSun } from "react-icons/fa";
import { NightModeContext } from "../../../contexts";
const NightModeSwitch = ({ handler, isNightMode, ...props }) => {
  const nightModeContext = useContext(NightModeContext);
  const [nightMode, setNightMode] = useState(nightModeContext.nightMode);

  return (
    <Button
      onClick={nightModeContext.changeNightMode}
      icon={!nightModeContext.nightMode ? <FaMoon /> : <FaSun />}
    ></Button>
  );
};

export default NightModeSwitch;
