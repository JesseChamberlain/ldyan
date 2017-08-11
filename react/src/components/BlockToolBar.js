import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockForm from '../components/BlockForm';

class BlockToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: this.props.blocks,
      blockSelected: {
        id: '',
        name: '',
        repetitions: '',
        measures: '',
        timeOver: '',
        timeUnder: '',
        musicalKey: '',
        songId: '',
        color: "green",
        location: '',
        tempo: ''
      },
      toolsClicked: false,
      playbackClicked: false,
      newEditDelete: "New",
      errors: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNEDToggleChange = this.handleNEDToggleChange.bind(this)
    this.handleBlockChange = this.handleBlockChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    let button = event.target.value
    if (button == "Tools" || button == "Done") {
      if (this.state.toolsClicked) {
        this.setState({
          toolsClicked: false,
          playbackClicked: false
        })
      } else {
        this.setState({
          toolsClicked: true,
          playbackClicked: false
        })
      }
    }
    if (button == "Play" || button == "End") {
      if (this.state.toolsClicked) {
        this.setState({
          toolsClicked: false,
          playbackClicked: false
        })
      } else {
        this.setState({
          toolsClicked: false,
          playbackClicked: true
        })
      }
    }
  }

  handleNEDToggleChange(event) {
    this.setState({ newEditDelete: event.target.value });
  }

  handleBlockChange(event) {
    let value = event.target.value
    if (value == 0) {
      this.setState({
        blockSelected: {
          id: '',
          name: '',
          repetitions: '',
          measures: '',
          timeOver: '',
          timeUnder: '',
          musicalKey: '',
          songId: '',
          color: "green",
          location: '',
          tempo: ''
        }
      });
    } else {
      function findValue(block) {
        return block.id == value;
      }

      let blocks = this.state.blocks
      let blockSelected = blocks.find(findValue)
      this.setState({
        blockSelected: {
          id: blockSelected.id,
          name: blockSelected.name,
          repetitions: blockSelected.repetitions,
          measures: blockSelected.measures,
          timeOver: blockSelected.time_signature_over,
          timeUnder: blockSelected.time_signature_under,
          musicalKey: blockSelected.musical_key,
          songId: blockSelected.song_id,
          color: blockSelected.color,
          location: blockSelected.location,
          tempo: blockSelected.tempo
        }
      });
    }
  }

  handleInputChange(event) {
    let blockSelected = this.state.blockSelected
    blockSelected[event.target.name] = event.target.value
    this.setState({ blockSelected: blockSelected })
  }

  validateNameSelection(selection) {
    if (selection === '' || selection === ' ') {
      let newError = { name: "Name can't be empty" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.name
      this.setState({ errors: errorState })
      return true
    }
  }

  validateRepetitionsSelection(selection) {
    if (selection === '' || selection === ' ') {
      let newError = { repetitions: "Repetitions can't be empty" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.repetitions
      this.setState({ errors: errorState })
      return true
    }
  }

  validateMeasuresSelection(selection) {
    if (selection === '' || selection === ' ') {
      let newError = { measures: "Measures can't be empty" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.measures
      this.setState({ errors: errorState })
      return true
    }
  }

  // Handle Fetch POST
  newBlock(formPayload) {
    fetch(`/api/v1/blocks`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
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

  // Handle Fetch PATCH
  editBlock(formPayload) {
    fetch(`/api/v1/blocks/${this.state.blockSelected.id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
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

  // Handle Fetch DELETE
  deleteBlock(formPayload) {
    fetch(`/api/v1/blocks/${this.state.blockSelected.id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
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

  clearForm(event) {
    event.preventDefault()
    this.setState({
      blockSelected: {
        id: '',
        name: '',
        repetitions: '',
        measures: '',
        timeOver: '',
        timeUnder: '',
        musicalKey: '',
        songId: '',
        color: "green",
        location: '',
        tempo: ''
      }
    })
  }

  // Modify for App
  handleFormSubmit(event) {
    let block = this.state.blockSelected
    let location = this.state.blocks.length + 1
    if( this.validateNameSelection(block.name) &
      this.validateRepetitionsSelection(block.repetitions) &
      this.validateMeasuresSelection(block.measures)
    ){
      let formPayload = {
        name: block.name,
        repetitions: block.repetitions,
        measures: block.measures,
        time_signature_over: block.timeOver,
        time_signature_under: block.timeUnder,
        musical_key: block.musicalKey,
        song_id: this.props.song.id,
        color: block.color,
        location: location,
        tempo: block.tempo
      };
      let toggle = this.state.newEditDelete
      if (toggle === "New") {
        this.newBlock(formPayload)
      } else if (toggle === "Edit") {
        this.editBlock(formPayload)
      } else if (toggle === "Delete") {
        this.deleteBlock(formPayload)
      }
      this.clearForm()
    }
  }

  render() {
    let tools
    let toggle = this.state.newEditDelete
    let toggleLabel
    let toggleSelector
    let blockSelected = this.state.blockSelected
    let formData
    let errorDiv
    let errorItems

    // Require fields error control
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    // Defines routes for New/Edit/Delete toggle
    if (toggle === "Delete") {
      toggleLabel = "delete"
      toggleSelector = "Choose:"
      formData = null
    } else {
      formData = {
        toggle: toggle,
        block: this.state.blockSelected,
        handleInputChange: this.handleInputChange
      }
      if (toggle === "Edit") {
        toggleLabel = "edit"
        toggleSelector = "Choose:"
      } else {
        toggleLabel = "define/duplicate"
        toggleSelector = "New"
      }
    }

    // Defines On/Off for 'Tools' button
    if (this.state.toolsClicked) {
      let blockSelector
      let blocks = this.state.blocks
      blockSelector = blocks.map(block => {
        return(
          <option key={block.id} value={block.id}>{block.name}</option>
        )
      })
      tools =
      <div className="tool-bar">
        <div className="tools-button tool-text">
          <button
            className="button tool-text"
            onClick={this.handleClick}
            value="Done"
          >Done
          </button>
          <button
            className="button tool-text"
            onClick={this.handleNEDToggleChange}
            value="New"
          >New
          </button>
          <button
            className="button tool-text"
            onClick={this.handleNEDToggleChange}
            value="Edit"
          >Edit
          </button>
          <button
            className="button tool-text"
            onClick={this.handleNEDToggleChange}
            value="Delete"
          >Delete
          </button>
          {/* <span className="label-text">    Use this form to {toggleLabel} blocks</span> */}
          <button
            className="button tool-text right"
            onClick={this.handleClick}
            value="Play"
            >Play
          </button>
        </div>
        <form className="new-form callout" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="small-12 columns">
              {errorDiv}
              <label>
                <span className="label-text">Blocks:</span>
                <select value={blockSelected.id} onChange={this.handleBlockChange}>
                  <option value="0">{toggleSelector}</option>
                  {blockSelector}
                </select>
              </label>
            </div>
            <BlockForm
              formData={formData}
            />
            <div className="small-12 columns">
              <br/>
              <button
                className="button tool-text right"
                onClick={this.clearForm}
                value="clear"
                >Clear
              </button>
              <button
                className="button tool-text right"
                type="submit"
                >Submit {toggle}
              </button>
            </div>
          </div>
        </form>
      </div>
    } else {
      tools =
      <div className="tools-button">
        <button
          className="button tool-text"
          onClick={this.handleClick}
          value="Tools"
        >Tools
        </button>
        <button
          className="button tool-text right"
          onClick={this.handleClick}
          value="Play"
        >Play
        </button>
      </div>
    }

    return(
      <div>
        {tools}
      </div>
    )
  }
}

export default BlockToolBar;
