import React, { useEffect } from 'react';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';

import './Footer.css';
import { useStateprovider } from '../../Stateprovider';
import { ACTION_TYPES } from '../../Reducer';

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useStateprovider();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((playbackState) => {
      dispatch({
        type: ACTION_TYPES.SET_PLAYING,
        playing: playbackState.is_playing,
      });

      dispatch({
        type: ACTION_TYPES.SET_ITEM,
        item: playbackState.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: ACTION_TYPES.SET_PLAYING,
        playing: false,
      });
    } else {
      spotify.play().then(() => {
        dispatch({
          type: ACTION_TYPES.SET_PLAYING,
          playing: true,
        });
      })
        .catch((error) => {
          alert('You need a premium account to play');
        });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((playingTrack) => {
      dispatch({
        type: ACTION_TYPES.SET_ITEM,
        item: playingTrack.item,
      });
      dispatch({
        type: ACTION_TYPES.SET_PLAYING,
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((playingTrack) => {
      dispatch({
        type: ACTION_TYPES.SET_ITEM,
        item: playingTrack.item,
      });
      dispatch({
        type: ACTION_TYPES.SET_PLAYING,
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default Footer;
