import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Paragraph } from "./components/atoms";

function App() {
  let color = "blue";
  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        className="App"
      >
        Hello World
      </div>
      <Card backgroundColor="purple" >zelfgknzgoinzrgoibn</Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Paragraph></Paragraph>
    </>
  );
}

export default App;
