import React, { useEffect } from 'react';
import './App.css';
import {spotifySearch, getSpotifyToken } from "./conexionSpotify/connection-spotify";
import { useState } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, } from "@mui/material";
import {Galery} from './components/Galery';
import { Card } from './components/Card';
import { CardA } from './components/Card2';



import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  // const [busqueda, setbusqueda] = useState("");
  const [data, setdata]= useState([]);
  const [busqueda, setbusqueda] = useState({
    type: "all",
    query: null,
});

  const TYPES = ["all", "album", "artist", "track"];

  const token = cookies.get("token");

  useEffect(()=>{
  if(!token)getSpotifyToken();
},[token]);

  // const Buscar = () => {  
  //     const ParamArray = [{
  //       q: busqueda
  //     }, {
  //       type: "track,artist,album",    

  //     }];
  //     const data =  spotifySearch(ParamArray.q , ParamArray.type);   
  //        setdata(data);   
  // }

  const Buscar = async () => {
    const data = await spotifySearch(busqueda.type, busqueda.query);
    setdata(data);
    console.log(data);
};


  const filtrarQuery = e => {
    setbusqueda((query)=>({
      ...query, query: e.target.value
    }));
  }
  const filtrarType = e => {
    setbusqueda((type)=>({
      ...type, type: e.target.value
    }));
  }




  return (
    <div className="App">
      <Button onClick={getSpotifyToken} variant="contained"color="success" sx={{marginTop:5}}>Solicitar Token </Button>
      <Grid container sx={{marginTop:5}}>
            <Grid item xs={6}>
                <TextField
                    id="outlined-search"
                    label="Buscar"
                    type="search"
                    onChange={filtrarQuery}
                />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={busqueda.type}
                        label="type"
                        onChange={filtrarType}
                    >
                        {TYPES.map((element, idx) => (
                            <MenuItem key={idx} value={element}>
                                {element}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={Buscar}>
                    Search
                </Button>
            </Grid>
</Grid>
       



        <Grid container padding={10} spacing={7} className='card'>
        
        
            {data?.tracks &&
          data?.tracks?.items?.map((track, index) => (

          <Grid item xs={12} sm={6} md={4} key={index}  >
            <Card
             name={track.name}
             artist={track.artists[0].name}
             image={track.album?.images[0]?.url}
             url={track.external_urls?.spotify}                                
            />                 
            {/* <p>{track.name}</p>             */}
            </Grid>                             
           ))}  
          
              {data?.artists &&
              data?.artists?.items?.map((artist, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} clasename='card' >
              <Galery
              image={artist.images[0]?.url}
              artist={artist.name}
              followers = {artist.followers.total}                                             
              />                                      
              </Grid>                             
            ))}  
                    
                    
            {data?.albums &&
            data?.albums?.items?.map((album, index) => (
        
          <Grid item xs={12} sm={6} md={4} key={index}  >
            <CardA
             album={album.name}                                 
             image={album.images[0]?.url}
             artist={album.artists[0].name}
            />                 
            </Grid>                             
           ))}   
        
        </Grid>      
    </div>


  );
}

export default App;
