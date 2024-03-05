import React, { useState } from "react";
import { Button } from "../../atoms";

const MenuButton = ({ icon = <></>, ...props }) => {
  const [colorButton, setColorButton] = useState(false);
  const handleColorChange = () => {
    setColorButton("red");
  };
  return (
    <Button
      onClick={handleColorChange}
      color={colorButton}
      text={props.children}
      icon={icon}
    ></Button>
  );
};

export default MenuButton;
