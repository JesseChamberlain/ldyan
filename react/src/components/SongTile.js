import React from 'react';

const SongTile = (props) => {
  let song = props.song
  return (
    <div className="song-tile">
      <Link to={`/songs/${song.id}`}>
        <p>{song.name}</p>
      </Link>
      <hr/>
    </div>
  );
}

export default SongTile;
