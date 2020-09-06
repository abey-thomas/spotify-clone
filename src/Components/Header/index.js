import React from 'react';

import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css';
import { useStateprovider } from '../../Stateprovider';

function Header() {
  const [{ user }, dispatch] = useStateprovider();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Podcasts " />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>

      </div>
    </div>
  );
}

export default Header;
