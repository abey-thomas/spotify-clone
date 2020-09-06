import DUMMY_USER from './dummyState.json';

export const initialState = {
  user: null,
  playlists: [],
  playlist: null,
  top_artists: null,
  playing: false,
  item: null,
  selected_playlist: '5O0lR7LiAE5kPqw0XEDKRn',
};

export const ACTION_TYPES = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_PLAYLISTS: 'SET_PLAYLISTS',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_TOP_ARTISTS: 'SET_TOP_ARTISTS',
  SET_PLAYING: 'SET_PLAYING',
  SET_ITEM: 'SET_ITEM',
  SET_SELECTED_PLAYLIST: 'SET_SELECTED_PLAYLIST',
  SET_DUMMY_USER: 'SET_DUMMY_USER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case ACTION_TYPES.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ACTION_TYPES.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };
    case ACTION_TYPES.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    case ACTION_TYPES.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case ACTION_TYPES.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
      };
    case ACTION_TYPES.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selected_playlist: action.selected_playlist,
      };

    case ACTION_TYPES.SET_DUMMY_USER:
      return {
        ...DUMMY_USER,
      };
    default:
      return state;
  }
};

export default reducer;
