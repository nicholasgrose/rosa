import React from 'react';
import Grid from '@material-ui/core/Grid';
import AlbumCard from './AlbumCard';
import AlbumCardProps from './AlbumCardProps';
import GalleryList from './GalleryList';

function asAlbumOnGrid(albumProps: AlbumCardProps): JSX.Element {
    const { albumName, thumbnailPath, albumPath } = albumProps;
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} key={albumName}>
            <AlbumCard
                albumName={albumName}
                thumbnailPath={thumbnailPath}
                albumPath={albumPath}
            />
        </Grid>
    );
}

function AlbumList(): JSX.Element {
    return (
        <Grid justify="center" spacing={3} container>
            {GalleryList.map(asAlbumOnGrid)}
        </Grid>
    );
}

export default AlbumList;
