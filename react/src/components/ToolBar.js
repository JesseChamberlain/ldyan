import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)

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
        <label><span className="label-text">Name</span>
          <input name="name" type='text' />
        </label>
        <label><span className="label-text">Description</span>
          <input name="name" type='text' />
        </label>
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

export default ToolBar;