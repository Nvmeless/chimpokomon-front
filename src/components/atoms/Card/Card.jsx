import React from "react";
import "./Card.module.css";
const Card = ({ backgroundColor = "green", ...props }) => {
  let content = "Contenu de card";
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      {props.children || "Cette card n'a pas de contenu"}
    </div>
  );
};

export default Card;
