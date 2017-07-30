import React, { Component } from 'react';
import SongTile from '../components/SongTile';

class SongsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/songs')
    .then(response => response.json())
    .then(body => {
      let allSongs = body
      this.setState({ songs : allSongs })
    })
  }

  render() {
    let songs = this.state.songs.map(song => {
      return(
        <SongTile
          key={song.id}
          song={song}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>Songs</h1>
          <hr/>
          {songs}
        </div>
      </div>
    )
  }
}

export default SongsIndexContainer;
