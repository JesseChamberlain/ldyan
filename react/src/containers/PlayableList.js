import React, { Component } from 'react';

class PlayableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playbackBlocks: [],
      name: '',
      repeat: '',
      measure: '',
      timeSig: '',
      color: '',
      pbIndex: 0,
      rIndex: 0,
      mIndex: 0,
      tsIndex: 0
    }
  }

  componentWillMount(){
    console.log(this.props.blocks)
    console.log("PlayableList will mount")
    let blocks = this.props.blocks
    if (blocks.length > 0) {
      this.createPlaybackBlocks(blocks)
    }
  }

  componentDidMount(){
    console.log(this.props.blocks)
    console.log("PlayableList did mount")
    setTimeout(() => this.wait, 500)
    setInterval(() => this.playThroughBlocks(this.state.playbackBlocks), 500)
    // this.playThroughBlocks(this.state.playbackBlocks)
    // setInterval(this.playThroughBlocks(this.state.playbackBlocks), 2000)
  }

  wait() {
    let date = Date.now()
    console.log(date);
  }

  createPlaybackBlocks(blocks){
    console.log("PlayableList createPlaybackBlocks")

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
    }
    this.setState({ playbackBlocks: playbackBlocks })
  }

  playThroughBlocks(playbackBlocks){
    // Variables for playback
    console.log("Playback Blocks:", playbackBlocks)
    console.log("Start countdown...")
    let pbIndex = this.state.pbIndex
    let rIndex = this.state.rIndex
    let mIndex = this.state.mIndex
    let tsIndex = this.state.tsIndex
    let songLength = this.state.playbackBlocks.length
    let namePB, repeatPB, measurePB, timeSigPB, bpmPB, color
    while (pbIndex < songLength) {
      let playbackBlock = playbackBlocks[pbIndex]
      namePB = playbackBlock.name
      bpmPB = playbackBlock.msPerBeat
      color = playbackBlock.color
      while (rIndex < playbackBlock.repeat) {
        repeatPB = playbackBlock.repeatArray[rIndex]
        while (mIndex < playbackBlock.measure) {
          measurePB = playbackBlock.measureArray[mIndex]
          while (tsIndex < playbackBlock.timeSig){
            timeSigPB = playbackBlock.timeSigArray[tsIndex]
            tsIndex++
            if (tsIndex == playbackBlock.timeSig) {
              tsIndex = 0
              mIndex++
              if (mIndex == playbackBlock.measure) {
                tsIndex = 0
                mIndex =0
                rIndex++
                if (rIndex == playbackBlock.repeat) {
                  tsIndex = 0
                  mIndex =0
                  rIndex = 0
                  pbIndex++
                }
              }
            }
            break
          }
          // mIndex++
          break
        }
        // rIndex++
        break
      }
      // pbIndex++
      break
    }
    console.log(pbIndex, rIndex, mIndex, tsIndex)
    this.setState({
      name: namePB,
      repeat: repeatPB,
      measure: measurePB,
      timeSig: timeSigPB,
      color: color,
      pbIndex: pbIndex,
      rIndex: rIndex,
      mIndex: mIndex,
      tsIndex: tsIndex
    })
  }

  render () {
    console.log("PlayableList render")
    console.log(this.state.playbackBlocks)

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
