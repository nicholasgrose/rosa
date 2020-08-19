import React from 'react';
import { Box, Card, CardActionArea, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const albumStyle: any = makeStyles({
    root: {
        fontWeight: 100,
    },
});

function Gallery(): JSX.Element {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Card>
                        <CardActionArea>
                            <Box
                                width="100%"
                                height="16vh"
                                display="flex"
                                flexDirection="column"
                            >
                                <Box flexGrow="1" />
                                <Typography
                                    align="center"
                                    variant="h5"
                                    component="h1"
                                    className={albumStyle.root}
                                >
                                    Portraits
                                </Typography>
                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Gallery;
