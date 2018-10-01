import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: null
    }
    this.setSelectedPlaylistId = this.setSelectedPlaylistId.bind(this);
  }

  setSelectedPlaylistId(id) {
    this.setState({selectedPlaylistId: id})
  }

  render() {
    let className;

    let playlists = this.props.playlistData.map(playlist => {
      className = this.state.selectedPlaylistId === playlist.id ? 'selected' : '';

      let handlePlaylistClick = () => {
        this.setSelectedPlaylistId(playlist.id)
      }
      return (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          handlePlaylistClick={handlePlaylistClick}
          className={className}
        />
      );
    });
    return (
      <div>
        {playlists}
      </div>
    );
  };
}


// const PlaylistCollection = (props) => {
//   let playlists = props.playlistData.map(playlist => {
//     return (
//       <Playlist
//         key={playlist.id}
//         name={playlist.name}
//       />
//     );
//   });
//   return (
//     <div>
//       {playlists}
//     </div>
//   );
// };

export default PlaylistCollection;
