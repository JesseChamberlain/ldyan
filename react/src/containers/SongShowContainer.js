import React, { Component } from 'react';
import SortableList from '../containers/SortableList';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ReactDOM from 'react-dom';
import BlockToolBar from '../components/BlockToolBar';

class SongShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      blocks: []
    }
    this.onSortEnd = this.onSortEnd.bind(this);
    this.updateSongBlocks = this.updateSongBlocks.bind(this);
  }

  // Fetch initial blocks
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
      let blocks = responseData["blocks"]
      this.setState({
        song: responseData["song"],
        blocks: blocks
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    ReactDOM.render(
      <BlockToolBar />,
      document.getElementById('tool-bar')
    )
  }

  // Send resorted array PATCH as JSON
  updateSongBlocks(blocks) {
    let data = {blocks: blocks};
    let jsonStringData = JSON.stringify(data);
    let songId = this.props.match.params.id;
    fetch(`/api/v1/songs/${songId}`, {
      method: 'PATCH',
      body: jsonStringData
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  // Resorts the array after dragging.
  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      blocks: arrayMove(this.state.blocks, oldIndex, newIndex)
    });
    this.updateSongBlocks(this.state.blocks)
  }

  render() {
    return(
      <div className="row">
        <div className="small-11 small-centered medium-9 medium-centered columns">
          <br/><br/><br/><br/><br/>
          <SortableList
            blocks={this.state.blocks}
            onSortEnd={this.onSortEnd}
          />
        </div>
      </div>
    )
  }
}

export default SongShowContainer;
