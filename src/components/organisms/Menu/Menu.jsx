import React from "react";
import { Card } from "../../atoms";
import { MenuButton } from "../../molecules";

const Menu = ({ handler, data }) => {
  return (
    <div>
      {data.map((x, i) => {
        let { icon, text, data } = x;
        return (
          <MenuButton key={i} handler={handler} icon={icon} data={data}>
            {text}
          </MenuButton>
        );
      })}
    </div>
  );
};

export default Menu;
