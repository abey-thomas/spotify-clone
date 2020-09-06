import React from 'react';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useStateprovider } from '../../../Stateprovider';
import { ACTION_TYPES } from '../../../Reducer';
import Header from '../../../Components/Header';
import SongRow from '../../../Components/SongRow';
import './Body.css';

function Body({ spotify }) {
  const [{ playlist, selected_playlist }, dispatch] = useStateprovider();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${selected_playlist}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: ACTION_TYPES.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: ACTION_TYPES.SET_PLAYING,
            playing: true,
          });
        });
      })
      .catch((error) => {
        alert('You need a premium account to play');
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: ACTION_TYPES.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: ACTION_TYPES.SET_PLAYING,
            playing: true,
          });
        });
      })
      .catch((error) => {
        alert('You need a premium account to play');
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={playlist?.images[0]?.url} alt="Discover weekly spotify" />
        <div className="body__info__text">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {playlist?.tracks.items.map((item, index) => (
          <SongRow playSong={playSong} track={item.track} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Body;
