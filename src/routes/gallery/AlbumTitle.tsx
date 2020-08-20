import React from 'react';
import { useTheme, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

interface AlbumTitleProps {
    hovering: boolean;
}

function AlbumTitle(props: AlbumTitleProps): JSX.Element {
    const { hovering } = props;
    const theme = useTheme();
    const albumTitleTransition = {
        height: hovering ? 'auto' : 0,
        transition: theme.transitions.easing.easeInOut,
    };
    const titleTypographyStyle = {
        fontWeight: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    return (
        <Box style={albumTitleTransition}>
            <Typography
                align="center"
                variant="h5"
                component="h2"
                style={titleTypographyStyle}
            >
                Portraits
            </Typography>
        </Box>
    );
}

export default AlbumTitle;
