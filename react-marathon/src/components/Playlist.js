import React from 'react';

const Playlist = (props) => {
  return (
    <div className={props.className} onClick={props.handlePlaylistClick}>
      <p>{props.name}</p>
    </div>
  );
};

export default Playlist;
