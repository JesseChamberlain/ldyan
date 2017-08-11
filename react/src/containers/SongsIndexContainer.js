import React, { Component } from 'react';
import SongTile from '../components/SongTile';
import ReactDOM from 'react-dom';
import SongToolBar from '../components/SongToolBar'

class SongsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/songs', {
      credentials: 'same-origin'
    })
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

  // Render ToolBar after Fetch
  componentDidUpdate() {
    ReactDOM.render(
      <SongToolBar
        songs={this.state.songs}
      />,
      document.getElementById('tool-bar')
    )
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
          <div className="small-11 small-centered medium-9 medium-centered columns">
            <br/><br/><br/>
            <h1 className="title">Songs</h1>
            <hr/>
            {songs}
          </div>
        </div>
    )
  }
}

export default SongsIndexContainer;
