import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongsCollection from './SongsCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="columns small-6">
          <h3>Playlists</h3>
          <PlaylistCollection
            playlistData={this.props.data.playlists}
          />
        </div>
        <div className="columns small-6">
          <h3>Songs</h3>
          <SongsCollection
            songsData={this.props.data.songs}
          />

        </div>
      </div>
    );
  }
}

export default App;
