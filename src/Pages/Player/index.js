import React from 'react';

import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';
import Body from './Body';
import './Player.css';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
