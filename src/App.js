import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, styled } from "styled-components";
import {
  Card,
  Paragraph,
  Divider,
  Button,
  InputText,
  Clock,
} from "./components/atoms";
import { FaCarrot, FaLemon, FaPepperHot } from "react-icons/fa";
import { Menu } from "./components/organisms";
import { MenuButton, NightModeSwitch } from "./components/molecules";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import HttpExample from "./components/atoms/HttpExample/HttpExample";

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

const night = {
  primary: "white",
  secondary: "#282c34",
};

const day = {
  primary: "#282c34",
  secondary: "white",
};

const StyledAppContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [page, setPage] = useState("lemon");
  const [isNightMode, setIsNightMode] = useState(true);
  const invert = () => (isNightMode ? night : day);
  const handleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            <Clock />
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

  console.log("App.render");
  return (
    <ThemeProvider theme={invert(isNightMode)}>
      <StyledAppContainer>
        <HttpExample></HttpExample>
        <Menu data={menuData} handler={handler}>
          <NightModeSwitch
            isNightMode={isNightMode}
            handler={handleNightMode}
          ></NightModeSwitch>
        </Menu>

        <InputText />
        {renderPage()}
        {/* <Card />

      <ThemeProvider theme={invert}>
        <Card />
      </ThemeProvider>

      <Card></Card>
      <Paragraph></Paragraph> */}
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
