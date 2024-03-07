import React from "react";
import { Card } from "../../atoms";
import { MenuButton } from "../../molecules";

const Menu = ({ handler, data, ...props }) => {
  console.log("Menu.render");
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

      {props.children}
    </div>
  );
};

export default Menu;
