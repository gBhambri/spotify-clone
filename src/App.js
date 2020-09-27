import React, { useEffect} from 'react';
import './App.css';
import Login from './Login'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import {useDateLayerValues} from './DataLayer'


const spotify=new SpotifyWebApi()

function App() {
  const [{user,token,playlists},dispatch]=useDateLayerValues()
  useEffect(()=>{
    const hash=getTokenFromUrl()
    window.location.hash=''
    const _token=hash.access_token
    if(_token)
    {
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe()
      .then(user=>{
        dispatch({
          type:'SET_USER',
          user
        })
        return user
      })
      .then((info)=>{
          spotify.getPlaylist("37i9dQZEVXcVQ3IXOCVVHu").then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
        
    }
  },[])
  return (
    <div className="App">
      {
        token?(
          <Player spotify={spotify}></Player>
        ):(
          <Login></Login>
        )
      }
    </div>
  );
}

export default App;
