import React from "react";
import { Canvas } from "@react-three/fiber";
const Scene = ({ children, ...props }) => {
  return <Canvas {...props}>{children}</Canvas>;
};

export default Scene;
