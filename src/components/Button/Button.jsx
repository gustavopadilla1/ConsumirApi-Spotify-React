import React from "react";
import {Button} from "@mui/material";
import { getSpotifyToken } from "../../conexionSpotify/connection-spotify";

function Buton() {
    return <Button onClick={getSpotifyToken} variant="contained">Token</Button>
}

export default Buton;