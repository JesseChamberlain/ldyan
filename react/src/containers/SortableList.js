import React from 'react';
import BlockTile from '../components/BlockTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({blocks}) => {
  return (
    <ul>
      {blocks.map((value, index) => (
        <BlockTile key={`item-${index}`} index={index} block={value} />
      ))}
    </ul>
  );
});

export default SortableList;
