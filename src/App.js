import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi(); // connect spotify with react

const App = () => {
  const [token, setToken] = useState(null);

  // fetch token from url, if token doesn't exist render Login Component
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clean the url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  }, []); 

  return (
    <>
      <div>{token ? <Player /> : <Login />}</div>
    </>
  );
};

export default App;
