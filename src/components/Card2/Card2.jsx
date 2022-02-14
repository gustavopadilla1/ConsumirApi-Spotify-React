import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import {CardActionArea } from '@mui/material';

export default function MultiActionAreaCard({album,image,artist}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image ?? "https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"}
          alt="album"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {album}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artista:{artist}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}