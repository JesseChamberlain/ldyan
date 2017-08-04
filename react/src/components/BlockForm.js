import React from 'react';

const BlockForm = (props) => {
  let data = props.formData
  let returnedData

  if (data === null) {
    returnedData = null
  } else {
    returnedData =
      <div>
        <div className="small-8 columns">
          <label>
            <span
              className="label-text"
              onChange=""
            >Block Name *
            </span>
            <input name="name" type="text" value={data.toggle}/>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span
              className="label-text"
              onChange=""
            >Repetitions *
            </span>
            <input name="name" type="text" value={data.toggle}/>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span
              className="label-text"
              onChange=""
            >Measures *
            </span>
            <input name="name" type="text" value={data.toggle}/>
          </label>
        </div>
        <div className="small-4 columns">
          <label>
            <span
              className="label-text"
              onChange=""
            >Scale/Key
            </span>
            <input name="name" type="text" value={data.toggle}/>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span
              className="label-text"
              onChange=""
            >Tempo (BPM)
            </span>
            <input name="name" type="text" value={data.toggle}/>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text">Time Over</span>
            <select value={data.timeOver} onChange={data.handleTimeOverChange}>
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
            <select value={data.timeUnder} onChange={data.handleTimeUnderChange}>
              <option value=""></option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </label>
        </div>
        <div className="small-2 columns">
          <label>
            <span className="label-text">Color</span>
            <select value={data.color} onChange={data.handleColorChange}>
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
