import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Card, Paragraph, Divider, Button } from "./components/atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
  FaPersonBooth,
  FaUser,
} from "react-icons/fa";
import { Menu } from "./components/organisms";
import { MenuButton } from "./components/molecules";
const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    value: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    value: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    value: "lemon",
  },
];

function App() {
  console.log("Render App");
  let color = "blue";
  return (
    <>
      <MenuButton icon={<FaPepperHot />}></MenuButton>
      <Menu data={menuData}></Menu>
      <Card />

      <ThemeProvider theme={invert}>
        <Card />
      </ThemeProvider>

      <Card></Card>
      <Paragraph></Paragraph>
    </>
  );
}

export default App;
