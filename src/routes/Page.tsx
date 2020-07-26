import React from 'react';
import { Container, Paper, useTheme, fade, Box } from '@material-ui/core';
import HomePage from './home-page/HomePage';
import AboutMe from './about-me/AboutMe';
import ActivePage from '../ActivePage';
import './Page.css';

interface PageProps {
    currentPage: ActivePage;
}

function getCurrentPage(currentPage: ActivePage): JSX.Element | null {
    switch (currentPage) {
        case ActivePage.HOME: {
            return <HomePage />;
        }
        case ActivePage.ABOUT: {
            return <AboutMe />;
        }
        default: {
            return null;
        }
    }
}

function Page(props: PageProps): JSX.Element {
    const { currentPage } = props;

    const theme = useTheme();
    const mainPage = {
        backgroundColor: fade(theme.palette.background.default, 0.75),
    };

    return (
        <Container className="main-page-container" maxWidth="lg">
            <Paper className="main-page" style={mainPage} square>
                <Box className="page" py="4%" px="10%">
                    {getCurrentPage(currentPage)}
                </Box>
            </Paper>
        </Container>
    );
}

export default Page;
