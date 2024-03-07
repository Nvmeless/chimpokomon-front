import React, { useState } from "react";
import { Button } from "../../atoms";
import { FaMoon, FaSun } from "react-icons/fa";
const NightModeSwitch = ({ handler, isNightMode, ...props }) => {
  const [nightMode, setNightMode] = useState(isNightMode);
  const handleNightMode = () => {
    handler();
    setNightMode(!nightMode);
  };
  console.log("NightModeSwitch.render");
  return (
    <Button
      onClick={handleNightMode}
      icon={!nightMode ? <FaMoon /> : <FaSun />}
    ></Button>
  );
};

export default NightModeSwitch;
