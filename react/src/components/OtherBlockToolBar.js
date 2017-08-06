import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockForm from '../components/BlockForm';

class BlockToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: this.props.blocks,
      id: '',
      name: '',
      repetitions: '',
      measures: '',
      timeOver: '',
      timeUnder: '',
      musicalKey: '',
      songId: '',
      color: '',
      location: '',
      tempo: '',
      clicked: false,
      newEditDelete: "New",
      errors: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNEDToggleChange = this.handleNEDToggleChange.bind(this)
    this.handleBlockChange = this.handleBlockChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.addNewBlock = this.addNewBlock.bind(this);
    this.clearForm = this.clearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    if (this.state.clicked) {
      this.setState({ clicked: false })
    } else {
      this.setState({ clicked: true })
    }
  }

  handleNEDToggleChange(event) {
    this.setState({ newEditDelete: event.target.value });
  }

  handleBlockChange(event) {
    let value = event.target.value
    if (value == 0) {
      this.clearForm(event)
      // this.setState({
      //   blockSelected: {
      //     id: '',
      //     name: '',
      //     repetitions: '',
      //     measures: '',
      //     timeOver: '',
      //     timeUnder: '',
      //     musicalKey: '',
      //     songId: '',
      //     color: "green",
      //     location: '',
      //     tempo: ''
      //   }
      // });
    } else {
      function findValue(block) {
        return block.id == value;
      }

      let blocks = this.state.blocks
      let blockSelected = blocks.find(findValue)
      this.setState({
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
      });
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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

  addNewBlock(formPayload) {
    let jsonStringData = JSON.stringify(formPayload);
    fetch(`/api/v1/blocks`, {
      method: 'POST',
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

  clearForm(event) {
    event.preventDefault()
    this.setState({
      id: '',
      name: '',
      repetitions: '',
      measures: '',
      timeOver: '',
      timeUnder: '',
      musicalKey: '',
      songId: '',
      color: '',
      location: '',
      tempo: ''
    })
  }

  // Modify for App
  handleFormSubmit(event) {
    let location = this.state.blocks.length + 1
    if( this.validateNameSelection(this.state.name) &
      this.validateRepetitionsSelection(this.state.repetitions) &
      this.validateMeasuresSelection(this.state.measures)
    ){
      let formPayload = {
        name: this.state.name,
        repetitions: this.state.repetitions,
        measures: this.state.measures,
        time_signature_over: this.state.timeOver,
        time_signature_under: this.state.timeUnder,
        musical_key: this.state.musicalKey,
        song_id: this.props.song.id,
        color: this.state.color,
        location: location,
        tempo: this.state.tempo
      };
      this.addNewBlock(formPayload)
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
        id: this.state.id,
        name: this.state.name,
        repetitions: this.state.repetitions,
        measures: this.state.measures,
        timeOver: this.state.time_signature_over,
        timeUnder: this.state.time_signature_under,
        musicalKey: this.state.musical_key,
        songId: this.state.song_id,
        color: this.state.color,
        location: this.state.location,
        tempo: this.state.tempo,
        handleChange: this.handleInputChange
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
    if (this.state.clicked) {
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
          <span className="label-text">    Use this form to {toggleLabel} blocks</span>
        </div>
        <form className="new-form callout" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="small-12 columns">
              {errorDiv}
              <label>
                <span className="label-text">Blocks:</span>
                <select value={this.state.id} onChange={this.handleBlockChange}>
                  <option value="0">{toggleSelector}</option>
                  {blockSelector}
                </select>
              </label>
            </div>
            <BlockForm
              formData={formData}
              clearForm={this.clearForm}
              toggle={toggle}
              handleFormSubmit={this.handleFormSubmit}
              errorDiv={errorDiv}
              handleBlockChange={this.handleBlockChange}
              toggleSelector={toggleSelector}
              blockSelector={blockSelector}
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
        <button className="button tool-text" onClick={this.handleClick}>Tools</button>
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
