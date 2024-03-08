import React, { useState, useContext, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, styled } from "styled-components";
import { InputText, Clock, Section, Heading } from "./components/atoms";
import { FaCarrot, FaLemon, FaPepperHot } from "react-icons/fa";
import { Menu } from "./components/organisms";
import { MenuButton, NightModeSwitch } from "./components/molecules";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import HttpExample from "./components/atoms/HttpExample/HttpExample";
import { NightModeProvider } from "./contexts";
import TodoList from "./components/organisms/TodoList/TodoList";
import TodoListCopy from "./components/organisms/TodoListCopy/TodoListCopy.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import Playlist from "./components/organisms/Playlist/Playlist";
import Scene from "./playground/Scene";
import Box from "./playground/Box";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
const ObjImport = () => {
  const materials = useLoader(MTLLoader, "./Room.mtl");
  const obj = useLoader(OBJLoader, "./Room.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    slug: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    slug: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    slug: "lemon",
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
  const [page, setPage] = useState("chili");
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
        return <Playlist>Lemon</Playlist>;
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
    <Provider store={store}>
      <ThemeProvider theme={invert(isNightMode)}>
        <NightModeProvider
          value={{
            changeNightMode: () => {
              setIsNightMode(!isNightMode);
            },
            nightMode: isNightMode,
          }}
        >
          <Scene>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <Box
              position={[1.2, 0, 0]}
              animation={(meshRef) => {
                return (state, delta) => (meshRef.current.rotation.x += delta);
              }}
            ></Box>
            <Box
              position={[-1.2, 0, 0]}
              animation={(meshRef) => {
                return (state, delta) => (meshRef.current.rotation.x += delta);
              }}
            ></Box>
            <Box
              position={[0, 0, 0]}
              animation={(meshRef) => {
                return (state, delta) => (meshRef.current.rotation.x += delta);
              }}
            ></Box>
            <ObjImport />
            <OrbitControls />
          </Scene>

          <StyledAppContainer>
            <HttpExample></HttpExample>
            <Menu data={menuData} handler={handler}>
              <NightModeSwitch></NightModeSwitch>
            </Menu>
            <TodoList></TodoList>
            <TodoListCopy></TodoListCopy>
            <InputText />
            {renderPage()}
          </StyledAppContainer>
        </NightModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
