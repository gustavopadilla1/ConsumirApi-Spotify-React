import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

 function TitlebarBelowImageList({image,artist,followers}) {
  return <ImageList sx={{ width: 400, height: 300}}>      
        <ImageListItem>
          <img                      
            src={image ?? "https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"}            
            alt="artist"
            loading="lazy"            
          />
          <ImageListItemBar
            title={artist}
            subtitle={<span>followers: {followers}</span>}
            position="below"
          />
        </ImageListItem>
    </ImageList>
}
export default TitlebarBelowImageList;