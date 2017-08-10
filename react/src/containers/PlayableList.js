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
      tsIndex: 0,
      counter: 0
    }
    this.playback = this.playback.bind(this)
  }

  componentWillMount(){
    console.log("PlayableList will mount")
    let blocks = this.props.blocks
    if (blocks.length > 0) {
      this.createPlaybackBlocks(blocks)
    }
  }

  componentDidMount(){
    console.log("PlayableList did mount")
    this.playThroughBlocks(this.state.playbackBlocks)
  }

  createPlaybackBlocks(blocks){
    console.log("PlayableList createPlaybackBlocks")
    let songLength = blocks.length
    let playbackBlocks =[]

    for (let i = 0; i < songLength; i++) {
      let block = blocks[i]
      let bpm = block.tempo
      let msPerBeat = Math.floor(60000/bpm)

      playbackBlocks.push({
        name: block.name,
        color: block.color,
        repeat: block.repetitions,
        measure: block.measures,
        timeSig: block.time_signature_over,
        msPerBeat: msPerBeat
      })
    }
    this.setState({ playbackBlocks: playbackBlocks })
  }

  playback(counter, color){
    this.setState({
      timeSig: counter,
      color: color
    })
  }

  playThroughBlocks(playbackBlocks){
    console.log("Playback Blocks:")
    console.log("Start countdown...")

    // This timeout works with playback() and sets State
    function start(counter, playback, playbackBlocks){
      // calculates total beats within song
      let beats = 0
      playbackBlocks.forEach((block) => {
        beats += (block.measure * (block.repeat * block.timeSig))
      });

      // Timeout looper
      if(counter < beats){
        setTimeout(() => {
          counter++;
          playback(counter, playbackBlocks[0].color)
          start(counter, playback, playbackBlocks);
        }, 1000);
      }
    }
    start(0, this.playback, playbackBlocks)

    // Looper to send N/R/M/TS to state
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
        repeatPB = rIndex + 1
        while (mIndex < playbackBlock.measure) {
          measurePB = mIndex + 1
          while (tsIndex < playbackBlock.timeSig){
            timeSigPB = tsIndex + 1
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
          break
        }
        break
      }
      break
    }
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
