import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon, selectPlaylist }) {
  return (
    <div className="sidebarOption" onClick={selectPlaylist || undefined}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (<h4>{title}</h4>) : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
