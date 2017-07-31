import React, { Component } from 'react';
import BlockTile from '../components/BlockTile';

class SongShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      blocks: []
    }
  }

  componentDidMount() {
    let songId = this.props.match.params.id;
    fetch(`/api/v1/songs/${songId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        song: responseData["song"],
        blocks: responseData["blocks"]
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    console.log(this.state.song)
    console.log(this.state.blocks)

    let blocks = this.state.blocks.map(block => {
      return(
        <BlockTile
          key={block.id}
          block={block}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          {blocks}
        </div>
      </div>
    )
  }
}

export default SongShowContainer;
