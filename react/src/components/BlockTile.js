import React from 'react';

const BlockTile = (props) => {
  let block = props.block
  let timeSig = `${block.time_signature_over}/${block.time_signature_under}`
  return (
    <div className="block-tile">
      <div className={`block-tile-${block.color}`}>
        <p id="block-name">{block.name} x{block.repetitions}</p>
        <p id="block-measure">Measures: {block.measures}, {timeSig}</p>
        <p id="block-scale">Key: {block.musical_key}</p>
      </div>
    </div>
  );
}

export default BlockTile;
