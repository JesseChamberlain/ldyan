import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const BlockTile = SortableElement((props) => {
  let block = props.block
  let timeSig = `${block.time_signature_over}/${block.time_signature_under}`
  return (
    <div className="block-tile row">
      <div className={`block-tile-${block.color} small-7 columns`}>
        <p id="block-name">{block.name}</p>
      </div>
      <div className={`block-tile-${block.color} small-5 columns`}>
        <p id="block-repetitions">x{block.repetitions}</p>
        <p id="block-measure">Measures: {block.measures}, {timeSig}</p>
        <p id="block-scale">Key: {block.musical_key}</p>
      </div>
    </div>
  );
})

export default BlockTile;
