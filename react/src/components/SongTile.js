import React from 'react';

const SongTile = (props) => {
  let song = props.song
  return (
    <div className="song-tile">
      <a href={`/songs/${song.id}`}>
        <p>{song.name}</p>
      </a>
      <hr/>
    </div>
  );
}

export default SongTile;

/* <Link to={`/songs/${song.id}`}>
  <p>{song.name}</p>
</Link> */
