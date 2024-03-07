import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPlaylists } from "../../../store";

const PlayListPictureContainerStyle = styled.div`
  width: 20vw;
  maxwidth: 20vw;
`;
const PlayListRowStyle = styled.div`
  display: flex;
  color: black;
  background: ${(props) => (props?.i % 2 ? "rgba(0,0,0, .05)" : "transparent")};
  align-items: center;
  gap: 5%;
`;
const PlaylistTitleStyle = styled.p`
  font-size: 1.1em;
`;

const Playlist = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const apiReturn = useSelector((state) => {
    console.log(state);
    return state.playlists;
  });

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);
  useEffect(() => {
    if (apiReturn.status === "succeed") {
      setIsLoaded(true);
    } else if (apiReturn.status == "error") {
      return;
    }
  }, [apiReturn]);

  const renderDatas = () => {
    if (isLoaded) {
      return <div>{apiReturn.playlists.url}</div>;
    }
    return <div>Les données n'ont pas encore chargées</div>;
  };
  return <div>{renderDatas()}</div>;
};

export default Playlist;
