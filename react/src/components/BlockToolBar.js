import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockForm from '../components/BlockForm';

class BlockToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: this.props.blocks,
      blockSelected: {
        id: "",
        name: "",
        repetitions: "",
        measures: "",
        timeOver: "",
        timeUnder: "",
        musicalKey: "",
        songId: "",
        color: "green",
        location: "",
        tempo: ""
      },
      clicked: false,
      newEditDelete: "New"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNEDToggleChange = this.handleNEDToggleChange.bind(this)
    this.handleBlockChange = this.handleBlockChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRepetitionsChange = this.handleRepetitionsChange.bind(this)
    this.handleMeasuresChange = this.handleMeasuresChange.bind(this)
    this.handleTimeOverChange = this.handleTimeOverChange.bind(this)
    this.handleTimeUnderChange = this.handleTimeUnderChange.bind(this)
    this.handleMusicalKeyChange = this.handleMusicalKeyChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleTempoChange = this.handleTempoChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
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
      this.setState({
        blockSelected: {
          id: "",
          name: "",
          repetitions: "",
          measures: "",
          timeOver: "",
          timeUnder: "",
          musicalKey: "",
          songId: "",
          color: "green",
          location: "",
          tempo: ""
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

  handleNameChange(event) {
    this.setState({ blockSelected: {name: event.target.value} });
  }

  handleRepetitionsChange(event) {
    this.setState({ blockSelected: {repetitions: event.target.value} });
  }

  handleMeasuresChange(event) {
    this.setState({ blockSelected: {measures: event.target.value} });
  }

  handleTimeOverChange(event) {
    this.setState({ blockSelected: {timeOver: event.target.value} });
  }

  handleTimeUnderChange(event) {
    this.setState({ blockSelected: {timeUnder: event.target.value} });
  }

  handleMusicalKeyChange(event) {
    this.setState({ blockSelected: {musicalKey: event.target.value} });
  }

  handleColorChange(event) {
    this.setState({ blockSelected: {color: event.target.value} });
  }

  handleTempoChange(event) {
    this.setState({ blockSelected: {tempo: event.target.value} });
  }

  clearForm(event) {
    event.preventDefault()
    this.setState({
      blockSelected: {
        id: "",
        name: "",
        repetitions: "",
        measures: "",
        timeOver: "",
        timeUnder: "",
        musicalKey: "",
        songId: "",
        color: "green",
        location: "",
        tempo: ""
      }
    })
  }

  render() {
    let tools
    let toggle = this.state.newEditDelete
    let toggleLabel
    let toggleSelector
    let blockSelected = this.state.blockSelected
    let formData

    // Defines routes for New/Edit/Delete toggle !!(rearrange conditionals)!!
    if (toggle === "Delete") {
      toggleLabel = "delete"
      toggleSelector = "Choose:"
      formData = null
    } else {
      formData = {
        toggle: toggle,
        block: this.state.blockSelected,
        handlers: {
          handleNameChange: this.handleNameChange,
          handleRepetitionsChange: this.handleRepetitionsChange,
          handleMeasuresChange: this.handleMeasuresChange,
          handleTimeOverChange: this.handleTimeOverChange,
          handleTimeUnderChange: this.handleTimeUnderChange,
          handleMusicalKeyChange: this.handleMusicalKeyChange,
          handleColorChange: this.handleColorChange,
          handleTempoChange: this.handleTempoChange
        }
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
        <form className="new-form" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="small-12 columns">
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
