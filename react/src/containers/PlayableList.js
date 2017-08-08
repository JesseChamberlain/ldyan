import React, { Component } from 'react';

class PlayableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    }
  }

  getBeats(block){
    console.log(block)
    console.log("PlayableList get beats")
    function toArray (input) {
      let index = 0
      let array = []
      while (index < input) {
        index ++
        array.push(index)
      }
      return array
    }
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
    console.log(this.props.blocks)
    console.log("PlayableList will mount")
  }

  componentDidMount(){
    console.log(this.props.blocks)
    console.log("PlayableList did mount")
  }

  componentDidUpdate() {
    console.log(this.props.blocks)
    console.log("PlayableList did update")
  }

  render () {
    console.log(this.props.blocks)
    console.log("PlayableList render")
    let blocks = this.props.blocks
    if (blocks.length > 0) {
      for (let i = 0, len = blocks.length; i < len; i++) {
        this.getBeats(blocks[i])
      }
    }

    return(
      <div>
      </div>
    )
  }
}

export default PlayableList
