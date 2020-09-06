import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css';
import SidebarOption from '../SidebarOption';
import { useStateprovider } from '../../Stateprovider';
import { ACTION_TYPES } from '../../Reducer';

function Sidebar() {
  const [{ playlists }, dispatch] = useStateprovider();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (<SidebarOption selectPlaylist={() => { dispatch({ type: ACTION_TYPES.SET_SELECTED_PLAYLIST, selected_playlist: playlist.id }); }} title={playlist.name} key={playlist.id} />))}
    </div>
  );
}

export default Sidebar;
