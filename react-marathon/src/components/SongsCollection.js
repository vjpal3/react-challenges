import React from 'react';
import Song from './Song';

class SongsCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: null
    }
    this.setSelectedSongId = this.setSelectedSongId.bind(this);
  }

  setSelectedSongId(id) {
    this.setState({selectedSongId: id});
  }

  render() {
    let className;
    let songs = this.props.songsData.map(song => {
      className = this.state.selectedSongId === song.id ? 'selected' : '';
      let handleSongClick = () => {
        this.setSelectedSongId(song.id)
      }

      return (
        <Song
          key={song.id}
          songData={song}
          handleSongClick={handleSongClick}
          className={className}
        />
      );
    });

    return(
      <div>
        {songs}
      </div>
    );
  }
}

export default SongsCollection;
