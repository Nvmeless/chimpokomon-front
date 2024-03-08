import React from "react";
import { Card } from "../../atoms";
import { MenuButton } from "../../molecules";

const Menu = ({ handler, data, ...props }) => {
  return (
    <Card height='20px'>
      {data.map((x, i) => {
        let { icon, text, slug } = x;
        return (
          <MenuButton key={i} handler={handler} icon={icon} slug={slug}>
            {text}
          </MenuButton>
        );
      })}

      {props.children}
    </Card>
  );
};

export default Menu;
