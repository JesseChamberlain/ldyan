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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      }
    })
    .then(response => response.json())
    .then(body => {
      let allSongs = body
      this.setState({ songs : allSongs["songs"] })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    console.log(this.state.songs)
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
          <h1 className="title">Songs</h1>
          <hr/>
          {songs}
        </div>
      </div>
    )
  }
}

export default SongsIndexContainer;
