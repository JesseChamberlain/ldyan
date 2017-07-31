import React from 'react';

const BlockTile = (props) => {
  let block = props.block
  let timeSig = `${block.time_signature_over}/${block.time_signature_under}`
  return (
    <div className={`block-tile-${block.color}`}>
      <p id="name">{block.name} x{block.repetitions}</p>
      <p id="measure">Measures: {block.measures}, {timeSig}</p>
      <p id="scale">Key: {block.musical_key}</p>
      <hr/>
    </div>
  );
}

export default BlockTile;
