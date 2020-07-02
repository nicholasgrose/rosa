import React from 'react';
import { Container, Paper, useTheme, fade, Box } from '@material-ui/core';
import HomePage from './home-page/HomePage';
import './Page.css';

function Page(): JSX.Element {
    const theme = useTheme();

    const mainPage = {
        backgroundColor: fade(theme.palette.background.default, 0.75),
    };

    return (
        <Container className="main-page-container" maxWidth="lg">
            <Paper className="main-page" style={mainPage} square>
                <Box className="page" py="5%" px="10%">
                    <HomePage />
                </Box>
            </Paper>
        </Container>
    );
}

export default Page;
