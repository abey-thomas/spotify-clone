import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { getTokenFromResponse } from './spotify';
import { useStateprovider } from './Stateprovider';
import { ACTION_TYPES } from './Reducer';
import Login from './Pages/Login';
import Player from './Pages/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, selected_playlist }, dispatch] = useStateprovider();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token || token) {
      dispatch({
        type: ACTION_TYPES.SET_TOKEN,
        token: _token || token,
      });
      spotify.setAccessToken(_token || token);
      spotify.getMe().then((user) => {
        dispatch({
          type: ACTION_TYPES.SET_USER,
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ACTION_TYPES.SET_PLAYLISTS,
          playlists,
        });
      });
      spotify.getMyTopArtists().then((response) => dispatch({
        type: ACTION_TYPES.SET_TOP_ARTISTS,
        top_artists: response,
      }));
    }
  }, [token, dispatch, selected_playlist]);

  useEffect(() => {
    if (token && selected_playlist) {
      spotify.getPlaylist(selected_playlist).then((playlist) => {
        dispatch({
          type: ACTION_TYPES.SET_PLAYLIST,
          playlist,
        });
      });
    }
  }, [token, selected_playlist]);

  return (
    <div className="app">
      {
        token
          ? <Player spotify={spotify} />
          : <Login />
          }
    </div>
  );
}

export default App;
