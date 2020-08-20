import React from 'react';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AlbumCard from './AlbumCard';

function Gallery(): JSX.Element {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AlbumCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Gallery;
