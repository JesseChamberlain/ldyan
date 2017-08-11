import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SongForm from '../components/SongForm';

class SongToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.songs,
      songSelected: {
        id: '',
        name: '',
        description: ''
      },
      clicked: false,
      newEditDelete: "New",
      errors: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNEDToggleChange = this.handleNEDToggleChange.bind(this)
    this.handleSongChange = this.handleSongChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

  handleSongChange(event) {
    let value = event.target.value
    if (value == 0) {
      this.setState({
        songSelected: {
          id: '',
          name: '',
          description: ''
        }
      })
    } else {
      function findValue(song) {
        return song.id == value;
      }

      let songs = this.state.songs
      let songSelected = songs.find(findValue)
      this.setState({
        songSelected: {
          id: songSelected.id,
          name: songSelected.name,
          description: songSelected.description
        }
      })
    }
  }

  handleInputChange(event) {
    let songSelected = this.state.songSelected
    songSelected[event.target.name] = event.target.value
    this.setState({ songSelected: songSelected })
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

  validateDescriptionSelection(selection) {
    if (selection === '' || selection === ' ') {
      let newError = { description: "Description can't be empty" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.description
      this.setState({ errors: errorState })
      return true
    }
  }

  // Handle Fetch POST
  newSong(formPayload) {
    fetch(`/api/v1/songs`, {
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
  editSong(song) {
    let data = {song: song};
    fetch(`/api/v1/songs/${this.state.songSelected.id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      body: JSON.stringify(data)
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
  deleteSong(formPayload) {
    fetch(`/api/v1/songs/${this.state.songSelected.id}`, {
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
      songSelected: {
        id: '',
        name: '',
        description: ''
      }
    })
  }

  // Modify for App
  handleFormSubmit(event) {
    let song = this.state.songSelected
    if( this.validateNameSelection(song.name) &
      this.validateDescriptionSelection(song.description)
    ){
      let formPayload = {
        name: song.name,
        description: song.description
      }
      let toggle = this.state.newEditDelete
      if (toggle === "New") {
        this.newSong(formPayload)
      } else if (toggle === "Edit") {
        this.editSong(formPayload)
      } else if (toggle === "Delete") {
        this.deleteSong(formPayload)
      }
      this.clearForm()
    }
  }

  render() {
    let tools
    let toggle = this.state.newEditDelete
    let toggleLabel
    let toggleSelector
    let songSelected = this.state.songSelected
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
        song: this.state.songSelected,
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

    // Define tools?
    if (this.state.clicked) {
      let songSelector
      let songs = this.state.songs
      songSelector = songs.map(song => {
        return(
          <option key={song.id} value={song.id}>{song.name}</option>
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
          {/* <span className="label-text">    Use this form to {toggleLabel} songs</span> */}
        </div>
        <form className="new-form callout" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="small-12 columns">
              {errorDiv}
              <label>
                <span className="label-text">Songs:</span>
                <select value={songSelected.id} onChange={this.handleSongChange}>
                  <option value="0">{toggleSelector}</option>
                  {songSelector}
                </select>
              </label>
            </div>
            <SongForm
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

export default SongToolBar;
