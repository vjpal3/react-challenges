import React from 'react';

const Song = props => {
  return (
    <div className={props.className} onClick={props.handleSongClick}>
      <p>{props.songData.name} - {props.songData.artist}</p>
    </div>
  )
};

export default Song;
