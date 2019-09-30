import React from "react";
import "./Container.css";
import AlbumContainer from "../AlbumsContainer/AlbumContainer";
import PlayerContainer from "../PlayerContainer/PlayerContainer";

function Container() {
  return (
    <div className="container">
      {/*  Display Album */}
      <AlbumContainer />
      {/* Display Songs & Music Player */}
      <PlayerContainer />
    </div>
  );
}

export default Container;
