import React from 'react';
import './App.css';
import {spotifySearch } from "./conexionSpotify/connection-spotify";
import { useState } from "react";
import {Button} from './components/Button';

function App() {
  const [busqueda, setbusqueda] = useState("");
  const [artists] = useState([])
  // setArtists

  const Buscar = () => {
    if (busqueda !== "") {
      const ParamArray = [{
        q: busqueda
      }, {
        type: "track,artist,album",

      }];
      spotifySearch(ParamArray);
    } else {
      alert("campo vacio ");
    }
  }

  const filtrar = e => {
    setbusqueda(e.target.value);
  }

  const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}> 

        {artist.images.length ? 
            <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}


  return (
    <div className="App">
      {/* <button onClick={getSpotifyToken} > Hola </button> */}
      <Button></Button>

      <div>
        <input type="text" placeholder='Buscar' value={busqueda} onChange={filtrar}></input>
        <button onClick={Buscar}> Buscar </button>
      </div>

      <img src={renderArtists()} alt="logo" />    
        <p>{renderArtists()??"hola"}</p>

    </div>
  );
}

export default App;
