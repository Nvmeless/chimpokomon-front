import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  Card,
  Paragraph,
  Divider,
  Button,
  InputText,
  Clock,
} from "./components/atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
  FaPersonBooth,
  FaUser,
} from "react-icons/fa";
import { Menu } from "./components/organisms";
import { MenuButton } from "./components/molecules";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    data: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    data: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    data: "lemon",
  },
];

function App() {
  const [page, setPage] = useState("lemon");

  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            <Clock / >
          </div>
        );
        break;
      case "lemon":
        return <div>Lemon</div>;
        break;

      default:
      case "chili":
        return <div>Chilly</div>;
        break;
    }
  };

  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <Menu data={menuData} handler={handler}></Menu>
      <InputText />
      {renderPage()}
      {/* <Card />

      <ThemeProvider theme={invert}>
        <Card />
      </ThemeProvider>

      <Card></Card>
      <Paragraph></Paragraph> */}
    </>
  );
}

export default App;
