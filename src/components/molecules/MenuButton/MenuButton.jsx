import React, { useState } from "react";
import { Button } from "../../atoms";

const MenuButton = ({ handler, slug, icon = <></>, ...props }) => {
  const [colorButton, setColorButton] = useState("");
  const handlePageChange = () => {
    handler(slug);
  };
  return (
    <Button
      onClick={handlePageChange}
      color={colorButton}
      text={props.children}
      icon={icon}
    ></Button>
  );
};

export default MenuButton;
