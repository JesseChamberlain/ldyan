import React from 'react';
import { Link } from 'react-router-dom';

const SongTile = (props) => {
  let song = props.song
  return (
    <div className="song-tile">
      <Link to={`/songs/${song.id}`}>
        <span className="text-link">{song.name}</span>
      </Link>
    </div>
  );
}

export default SongTile;
