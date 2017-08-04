import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BlockToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      timeOver: null,
      timeUnder: null,
      color: "green"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTimeOverChange = this.handleTimeOverChange.bind(this)
    this.handleTimeUnderChange = this.handleTimeUnderChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleTimeOverChange(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ timeOver: null });
    } else {
      this.setState({ timeOver: value });
    }
  }

  handleTimeUnderChange(event) {
    let value = event.target.value;
    if (value === '-') {
      this.setState({ timeUnder: null });
    } else {
      this.setState({ timeUnder: value });
    }
  }

  handleColorChange(event) {
    let value = event.target.value;
    this.setState({ color: value });
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

    let tools
    if (this.state.clicked) {
      tools =
      <div className="tool-bar">
        <div className="tools-button">
          <button className="button tool-text" onClick={this.handleClick}>Done</button>
          <button className="button tool-text">New</button>
          <button className="button tool-text">Edit</button>
          <button className="button tool-text">Delete</button>
        </div>
        <div className="row">
          <div className="small-8 columns">
            <label><span className="label-text">Block Name *</span>
              <input name="name" type='text' />
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Repetitions *</span>
              <input name="name" type='text' />
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Measures *</span>
              <input name="name" type='text' />
            </label>
          </div>
          <div className="small-4 columns">
            <label><span className="label-text">Scale/Key</span>
              <input name="name" type='text' />
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Tempo (BPM)</span>
              <input name="name" type='text' />
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Time Over</span>
              <select value={this.state.timeOver} onChange={this.handleTimeOverChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Time Under</span>
              <select value={this.state.timeUnder} onChange={this.handleTimeUnderChange}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="16">16</option>
              </select>
            </label>
          </div>
          <div className="small-2 columns">
            <label><span className="label-text">Color</span>
              <select value={this.state.color} onChange={this.handleColorChange}>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
              </select>
            </label>
          </div>
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
