import React, { useRef, useState } from "react";

const Box = ({ ...props }) => {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <mesh
      ref={meshRef}
      onClick={() => {
        setActive(!active);
      }}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      scale={hovered ? 2 : 1}
      castShadow
      receiveShadow
      {...props}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "blue" : "red"} />
    </mesh>
  );
};

export default Box;
