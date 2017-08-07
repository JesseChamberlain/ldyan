import React, { Component } from 'react';

class PlayableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: this.props.blocks
    }
  }

  getBeats(block){
    function toArray (input) {
      let index = 0
      let array = []
      while (index < input) {
        index ++
        array.push(index)
      }
      return array
    }
    debugger
    const bpm = block.tempo
    const measure = block.time_signature_over
    const repeat = block.repetitions

    let msPerBeat = Math.floor(60000/bpm)
    let measureArray = toArray(measure)
    let repeatArray = toArray(repeat)

    console.log("bpm:", bpm)
    console.log("measure:", measure)
    console.log("repeat:", repeat)
    console.log("msPerBeat:", msPerBeat)
    console.log("measureArray:", measureArray)
    console.log("repeatArray:", repeatArray)
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render () {

    this.getBeats(this.state.blocks[0])

    return(
      <div>
      </div>
    )
  }
}

export default PlayableList
