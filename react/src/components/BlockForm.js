import React from 'react';

const BlockForm = (props) => {
  let data = props.formData
  let returnedData

  if (data === null) {
    returnedData = null
  } else {
    let block = data.block
    let handleInputChange = data.handleInputChange

    returnedData =
      <div>
        <div className="small-8 columns">
          <label>
            <span className="label-text" >Block Name *</span>
            <input
              name="name"
              type="text"
              value={block.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text" >Repetitions *</span>
            <input
              name="repetitions"
              type="text"
              value={block.repetitions}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text" >Measures *</span>
            <input
              name="measures"
              type="text"
              value={block.measures}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-4 columns">
          <label>
            <span className="label-text" >Scale/Key</span>
            <input
              name="musicalKey"
              type="text"
              value={block.musicalKey}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text" >Tempo (BPM)</span>
            <input
              name="tempo"
              type="text"
              value={block.tempo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text">Time Over</span>
            <select
              name="timeOver"
              value={block.timeOver}
              onChange={handleInputChange}
            >
              <option value=""></option>
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
          <label>
            <span className="label-text">Time Under</span>
            <select
              name="timeUnder"
              value={block.timeUnder}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text">Color</span>
            <select
              name="color"
              value={block.color}
              onChange={handleInputChange}
              >
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
            </select>
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

export default BlockForm;
