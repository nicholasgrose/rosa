import React from 'react';
import { Box, Collapse } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

interface AlbumTitleProps {
    hovering: boolean;
}

function AlbumTitle(props: AlbumTitleProps): JSX.Element {
    const { hovering } = props;
    const titleTypographyStyle = {
        fontWeight: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    return (
        <Box>
            <Collapse in={hovering}>
                <Typography
                    align="center"
                    variant="h5"
                    component="h2"
                    style={titleTypographyStyle}
                >
                    Portraits
                </Typography>
            </Collapse>
        </Box>
    );
}

export default AlbumTitle;
