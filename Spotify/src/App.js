import './App.css';
import React, { useEffect }           from 'react'
import SpotifyWebApi                  from "spotify-web-api-js"
import { getTokenFromURL }            from './spotify';
import Login                          from './Login'
import Player                         from './Player'
import {useDataLayerValue}            from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token },dispatch] = useDataLayerValue({})
  
  //Run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromURL()
    window.location.hash = ""
    const _token = hash.access_token

    if(_token)
    {
      dispatch ({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type:'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:'SET_PLAYLISTS',
          playlists: playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcTSBKg9TaLT0').then((response) =>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  }, [])

console.log(user)

  return (
    <div className="app">
      {
        token ? 
          (<Player spotify={spotify}/>) 
          : 
          (<Login />)
      }
    </div>
  );
}

export default App;
