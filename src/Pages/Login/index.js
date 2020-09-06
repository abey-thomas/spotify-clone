import React from 'react';
import './Login.css';
import { accessUrl } from '../../spotify';
import { useStateprovider } from '../../Stateprovider';
import { ACTION_TYPES } from '../../Reducer';

function Login() {
  const [state, dispatch] = useStateprovider();
  return (
    <div className="login">
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify clone logo" />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
      <button onClick={() => { dispatch({ type: ACTION_TYPES.SET_DUMMY_USER, data: {} }); }}>SEE DEMO</button>
    </div>
  );
}

export default Login;
