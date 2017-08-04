import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockForm from '../components/BlockForm';

class BlockToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      timeOver: null,
      timeUnder: null,
      color: "green",
      block: null,
      newEditDelete: "New"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTimeOverChange = this.handleTimeOverChange.bind(this)
    this.handleTimeUnderChange = this.handleTimeUnderChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleBlockChange = this.handleBlockChange.bind(this)
    this.handleNEDToggleChange = this.handleNEDToggleChange.bind(this)
  }

  handleTimeOverChange(event) {
    let value = event.target.value;
    if (value === '') {
      this.setState({ timeOver: null });
    } else {
      this.setState({ timeOver: value });
    }
  }

  handleTimeUnderChange(event) {
    let value = event.target.value;
    if (value === '') {
      this.setState({ timeUnder: null });
    } else {
      this.setState({ timeUnder: value });
    }
  }

  handleColorChange(event) {
    let value = event.target.value;
    this.setState({ color: value });
  }

  handleNEDToggleChange(event) {
    let value = event.target.value;
    this.setState({ newEditDelete: value });
  }

  handleBlockChange(event) {
    let value = event.target.value;
    if (value === '') {
      this.setState({ block: null });
    } else {
      this.setState({ block: value });
    }
  }

  handleClick(event) {
    event.preventDefault()
    if (this.state.clicked) {
      this.setState({ clicked: false })
    } else {
      this.setState({ clicked: true })
    }
  }

  render() {
    let toggle = this.state.newEditDelete
    let toggleLabel
    let formData
    if (toggle === "New") {
      toggleLabel = "Define/Duplicate"
      formData = {
        toggle: toggle,
        timeOver: this.state.timeOver,
        timeUnder: this.state.timeUnder,
        color: this.state.color,
        handleColorChange: this.handleColorChange,
        handleTimeUnderChange: this.handleTimeUnderChange,
        handleTimeOverChange: this.handleTimeOverChange
      }
    } else if (toggle === "Edit") {
      toggleLabel = "Edit"
      formData = {
        toggle: toggle,
        timeOver: this.state.timeOver,
        timeUnder: this.state.timeUnder,
        color: this.state.color,
        handleColorChange: this.handleColorChange,
        handleTimeUnderChange: this.handleTimeUnderChange,
        handleTimeOverChange: this.handleTimeOverChange
      }
    } else {
      toggleLabel = "Delete"
      formData = null
    }

    let tools
    if (this.state.clicked) {
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
        </div>
        <div className="row">
          <div className="small-12 columns">
            <label>
              <span className="label-text">Blocks: {toggleLabel}</span>
              <select value={this.state.block} onChange={this.handleBlockChange}>
                <option value="">New</option>
                <option value="A1">A1</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
            </label>
          </div>
          <BlockForm
            formData={formData}
          />
        </div>
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
