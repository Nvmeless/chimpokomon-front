import React from "react";
import { Card } from "../../atoms";
import { MenuButton } from "../../molecules";

const Menu = ({ handler, data, ...props }) => {
  return (
    <div>
      {data.map((x, i) => {
        let { icon, text, slug } = x;
        return (
          <MenuButton key={i} handler={handler} icon={icon} slug={slug}>
            {text}
          </MenuButton>
        );
      })}

      {props.children}
    </div>
  );
};

export default Menu;
