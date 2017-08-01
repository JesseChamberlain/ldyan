import React, { Component } from 'react';
import BlockTile from '../components/BlockTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({blocks}) => {
  return (
    <ul>
      {blocks.map((value, index) => (
        <BlockTile key={`item-${index}`} index={index} block={value} />
      ))}
    </ul>
  );
});

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
      this.setState({
        song: responseData["song"],
        blocks: responseData["blocks"]
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
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
    .then(body => {
      console.log(body);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  // Resorts the array after dragging.
  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      blocks: arrayMove(this.state.blocks, oldIndex, newIndex),
    });
    this.updateSongBlocks(this.state.blocks)
  };

  render() {
    return(
      <div className="row">
        <div className="small-11 small-centered medium-9 medium-centered columns">
          <SortableList blocks={this.state.blocks} onSortEnd={this.onSortEnd} />
        </div>
      </div>
    )
  }
}

export default SongShowContainer;

// // Backup loader for API bypass
// blocks: [
//   {
//     name: "I",
//     color: "green",
//     repetitions: 4,
//     measures: 8,
//     time_signature_over: 8,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "A1",
//     color: "red",
//     repetitions: 4,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "A2",
//     color: "red",
//     repetitions: 2,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "A3",
//     color: "red",
//     repetitions: 1,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "B1",
//     color: "pink",
//     repetitions: 2,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "B2",
//     color: "pink",
//     repetitions: 5,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "BB",
//     color: "pink",
//     repetitions: 1,
//     measures: 8,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "C",
//     color: "green",
//     repetitions: 2,
//     measures: "8",
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   },
//   {
//     name: "A4",
//     color: "red",
//     repetitions: 3,
//     measures: 6,
//     time_signature_over: 6,
//     time_signature_under: 8,
//     musical_key: "C Arabic",
//     song_id: 4
//   }
// ]
