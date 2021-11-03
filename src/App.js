import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); // connect spotify with react

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // fetch token from url
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clean the url
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  return (
    <>
      <div>{token ? <Player spotify={spotify} /> : <Login />}</div>
    </>
  );
};

export default App;
