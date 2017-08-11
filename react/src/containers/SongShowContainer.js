import React, { Component } from 'react';
import SortableList from '../containers/SortableList';
import PlayableList from '../containers/PlayableList';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ReactDOM from 'react-dom';
import BlockToolBar from '../components/BlockToolBar';

class SongShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      blocks: [],
      currentList: "vert"
    }
    this.onSortEnd = this.onSortEnd.bind(this);
    this.updateSongBlocks = this.updateSongBlocks.bind(this);
    this.handleToolsPlayToggle = this.handleToolsPlayToggle.bind(this);
  }

  // Fetch initial blocks
  componentDidMount() {
    let songId = this.props.match.params.id;
    fetch(`/api/v1/songs/${songId}`, {
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
    .then((response) => response.json())
    .then((responseData) => {
      let blocks = responseData["blocks"]
      this.setState({
        song: responseData["song"],
        blocks: blocks
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  //
  handleToolsPlayToggle(event){
    let selected = event.target.value
    console.log(selected)
    if (selected == "Play") {
      this.setState({ currentList: "play" })
    } else if (selected == "Stop") {
      this.setState({ currentList: "vert" })
    }
  }

  // Render ToolBar after Fetch
  componentDidUpdate() {
    ReactDOM.render(
      <BlockToolBar
        song={this.state.song}
        blocks={this.state.blocks}
        handleToolsPlay={this.handleToolsPlayToggle}
      />,
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
      credentials: 'same-origin',
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

  // Re-sorts the array after dragging.
  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      blocks: arrayMove(this.state.blocks, oldIndex, newIndex)
    });
    this.updateSongBlocks(this.state.blocks)
  }

  render() {
    let selected = this.state.currentList
    let currentList
    let playableList
    let sortableVertList
    let sortableHorzList

    sortableVertList =
    <div className="small-9 small-centered medium-9 medium-centered large-11 large-centered columns">
      <br/><br/><br/>
      <h1 className="title-show">{this.state.song.name}</h1>
      <hr/>
      <br/>
      <SortableList
        blocks={this.state.blocks}
        onSortEnd={this.onSortEnd}
      />
    </div>

    if (this.state.blocks.length > 0) {
      playableList =
      <div className="small-11 small-centered columns">
        <br/><br/><br/><br/><br/><br/><br/>
        <PlayableList
          blocks={this.state.blocks}
        />
      </div>
    }

    if (selected == "vert") {
      currentList = sortableVertList
    } else if (selected == "horz") {
      currentList = sortableHorzList
    } else if (selected == "play") {
      currentList = playableList
    }

    return(
      <div className="row">
        {currentList}
      </div>
    )
  }
}

export default SongShowContainer;
