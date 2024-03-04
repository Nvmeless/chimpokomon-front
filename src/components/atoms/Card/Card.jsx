import React from "react";
import style from "./Card.module.css";
import { FaBeer } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { styled } from "styled-components";

const CardStyle = styled.div`
  background-color: ${(props) => props.theme.secondary ?? "white"};
  color: ${(props) => props.theme.primary ?? "white"};
`;

const Card = (props) => {
  return <CardStyle {...props}>{"Cette card n'a pas de contenu"}</CardStyle>;
};

export default Card;
