import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Card, Paragraph } from "./components/atoms";

const invert = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

function App() {
  let color = "blue";
  return (
    <>
      <div className="App">Hello World</div>
      <Card backgroundColor="purple">zelfgknzgoinzrgoibn</Card>
      <Card></Card>
      <Card height="200px" backgroundColor="White"></Card>
      <Card color="green"></Card>
      <ThemeProvider theme={invert}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ThemeProvider>
      <Card></Card>
      <Paragraph></Paragraph>
    </>
  );
}

export default App;
