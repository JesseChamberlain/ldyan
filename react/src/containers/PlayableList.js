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
    let blocks = this.props.blocks
    if (blocks.length > 0) {
      this.createPlaybackBlocks(blocks)
    }
  }

  componentDidMount(){
    this.playThroughBlocks(this.state.playbackBlocks)
  }

  createPlaybackBlocks(blocks){
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

  // Looper to send N/R/M/TS to state
  playback(playbackBlocks){
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
    return bpmPB
  }

  playThroughBlocks(playbackBlocks){
    // calculates total beats within song
    let beats = 0
    playbackBlocks.forEach((block) => {
      beats += (block.measure * (block.repeat * block.timeSig))
    });

    // This timeout works with playback() and sets State
    let bpm = playbackBlocks[0].msPerBeat
    function start(counter, playback, playbackBlocks, bpm){
      if(counter < beats){
        setTimeout(() => {
          counter++;
          bpm = playback(playbackBlocks)
          start(counter, playback, playbackBlocks, bpm);
        }, bpm);
      }
    }
    start(0, this.playback, playbackBlocks, bpm)
  }

  render () {
    let name = this.state.name
    let repeat = this.state.repeat
    let measure = this.state.measure
    let timeSig = this.state.timeSig
    let color = this.state.color

    return(
      <div className="block-tile row">
        <div className={`block-tile-${color} small-4 columns`}>
          <p id="block-playback">R: {repeat}</p>
        </div>
        <div className={`block-tile-${color} small-4 columns`}>
          <p id="block-playback">M: {measure}</p>
        </div>
        <div className={`block-tile-${color} small-4 columns`}>
          <p id="block-playback">T: {timeSig}</p>
        </div>
        <div className={`block-tile-${color} small-12 columns`}>
          <span id="block-name">{name}</span>
        </div>
      </div>
    )
  }
}

export default PlayableList
