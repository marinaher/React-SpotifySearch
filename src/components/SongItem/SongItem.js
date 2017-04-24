import React, { PropTypes } from 'react';
import './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];

  return (
    <div className="songItems">
      <div className="album">
        <img alt="presentation" src={albumImage.url}/>
        <span className="albumName">{albumName}</span>
      </div>
      <div className="songAndDescription">
        <audio controls src={songData.preview_url} />
        <span className="songDescription">Name: {songData.name}</span>
        <span className="songDescription">Duration: {songData.duration_ms / 1000} seconds</span>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
