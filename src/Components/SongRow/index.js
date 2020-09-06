import React from 'react';

import { useStateprovider } from '../../Stateprovider';
import './SongRow.css';

function SongRow({ track, playSong }) {
  const [state, dispatch] = useStateprovider();
  if (!track?.album?.name) return null;
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track?.album?.images[0]?.url} alt="" />
      <div className="songRow__info">
        <h2>{ track.name }</h2>
        <p>
          {track?.artists?.map((artist) => artist.name)?.join(', ')}
          {' '}
          -
          {' '}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
