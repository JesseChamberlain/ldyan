import React from 'react';

const SongForm = (props) => {
  let data = props.formData
  let returnedData

  if (data === null) {
    returnedData = null
  } else {
    let song = data.song
    let handleInputChange = data.handleInputChange

    returnedData =
      <div>
        <div className="small-12 columns">
          <label>
            <span className="label-text" >Song Name *</span>
            <input
              name="name"
              type="text"
              value={song.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-12 columns">
          <label>
            <span className="label-text" >Description *</span>
            <input
              name="description"
              type="text"
              value={song.description}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
  }

  return (
    <div>
      {returnedData}
    </div>
  )
}

export default SongForm;
