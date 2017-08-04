import React from 'react';
import BlockTile from '../components/BlockTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({blocks}) => {
  let sortedBlocks
  sortedBlocks = blocks.map((value, index) => (
    <BlockTile
      key={`item-${index}`}
      index={index}
      block={value}
    />
  ))

  return (
    <ul>
      {sortedBlocks}
    </ul>
  );
});

export default SortableList;
