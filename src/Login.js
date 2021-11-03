import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <>
      <div className="login">
        <img
          src={process.env.PUBLIC_URL + "/SpotifyLogo.svg"}
          alt="Spotify Logo"
        />
        <a href={loginUrl}>LOGIN TO SPOTIFY CLONE </a>
      </div>
    </>
  );
};

export default Login;
