import React, { Component } from 'react';

class PlayableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      name: '',
      repeat: '',
      measure: '',
      timeSig: '',
      color: ''
    }
  }

  componentWillMount(){
    console.log(this.props.blocks)
    console.log("PlayableList will mount")
  }

  componentDidMount(){
    console.log(this.props.blocks)
    console.log("PlayableList did mount")
    let blocks = this.props.blocks
    if (blocks.length > 0) {
      this.getBeats(blocks)
    }
  }

  setDelay(name, repeat, measure, timeSig, bpm, color){
    this.setState({
      name: name,
      repeat: repeat,
      measure: measure,
      timeSig: timeSig,
      color: color
    })

    setTimeout(function(){
      console.log(`Playback: N:${name} R:${repeat} M:${measure} TS:${timeSig}`);
    }, bpm);
  }

  getBeats(blocks){
    console.log("PlayableList getBeats")

    let songLength = blocks.length
    let playbackBlocks =[]
    let bpm, timeSig, measure, repeat

    for (let i = 0; i < songLength; i++) {
      let block = blocks[i]
      function toArray (input) {
        let array = []
        for (let i = 1; i <= songLength; ++i) {
          array.push(i)
        }
        return array
      }

      bpm = block.tempo
      timeSig = block.time_signature_over
      measure = block.measures
      repeat = block.repetitions

      let msPerBeat = Math.floor(60000/bpm)
      let timeSigArray = toArray(timeSig)
      let measureArray = toArray(measure)
      let repeatArray = toArray(repeat)

      playbackBlocks.push({
        name: block.name,
        color: block.color,
        repeatArray: repeatArray,
        measureArray: measureArray,
        timeSigArray: timeSigArray,
        repeat: repeat,
        measure: measure,
        timeSig: timeSig,
        msPerBeat: msPerBeat
      })

      // // To Console for Dev
      // console.log("block:", block)
      // console.log("bpm:", bpm)
      // console.log("timeSig:", timeSig)
      // console.log("measure:", measure)
      // console.log("repeat:", repeat)
      // console.log("msPerBeat:", msPerBeat)
      // console.log("timeSigArray:", timeSigArray)
      // console.log("measureArray:", measureArray)
      // console.log("repeatArray:", repeatArray)
    }

    // Variables for playback
    console.log("Playback Blocks:", playbackBlocks)
    console.log("Start countdown...")

    // nested loops for playback


    for (let i = 0; i < songLength; i++) {
      let playbackBlock = playbackBlocks[i]
      let namePB, repeatPB, measurePB, timeSigPB, bpmPB, color
      namePB = playbackBlock.name
      bpmPB = playbackBlock.msPerBeat
      color = playbackBlock.color

      for (let i = 0; i < playbackBlock.repeat; i++) {
        repeatPB = playbackBlock.repeatArray[i]
        for (let i = 0; i < playbackBlock.measure; i++) {
           measurePB = playbackBlock.measureArray[i]
          for (let i = 0; i < playbackBlock.timeSig; i++){
            timeSigPB = playbackBlock.timeSigArray[i]
            this.setDelay(namePB, repeatPB, measurePB, timeSigPB, bpmPB, color)
          }
        }
      }
    }
  }


  componentDidUpdate() {
    console.log(this.props.blocks)
    console.log("PlayableList did update")
  }

  render () {
    console.log("PlayableList render")
    // let blocks = this.props.blocks
    // if (blocks.length > 0) {
    //   this.getBeats(blocks)
    // }
    let name = this.state.name
    let repeat = this.state.repeat
    let measure = this.state.measure
    let timeSig = this.state.timeSig
    let color = this.state.color

    let output = `Playback: N:${name} R:${repeat} M:${measure} TS:${timeSig}`
    return(
      <div>
        <span className={`block-tile-${color}`}>
          {output}
        </span>
      </div>
    )
  }
}

export default PlayableList
