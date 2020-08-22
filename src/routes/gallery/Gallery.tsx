import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AlbumList from './AlbumList';

function Gallery(): JSX.Element {
    return (
        <Box>
            <Typography variant="h2" align="center">
                The Gallery
            </Typography>
            <Box mt="2%">
                <AlbumList />
            </Box>
        </Box>
    );
}

export default Gallery;
