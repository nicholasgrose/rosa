import React from 'react';
import { Container, Paper, useTheme, fade, Box } from '@material-ui/core';
import HomePage from './home-page/HomePage';
import AboutMe from './about-me/AboutMe';
import Resume from './resume/Resume';
import Gallery from './gallery/Gallery';
import Books from './books/Books';
import Music from './music/Music';
import Contact from './contact/Contact';
import Thoughts from './thoughts/Thoughts';
import ActivePage from '../ActivePage';
import './Page.css';

interface PageProps {
    currentPage: ActivePage;
}

const pageMap: Map<ActivePage, JSX.Element> = new Map([
    [ActivePage.HOME, <HomePage />],
    [ActivePage.ABOUT, <AboutMe />],
    [ActivePage.RESUME, <Resume />],
    [ActivePage.GALLERY, <Gallery />],
    [ActivePage.BOOKS, <Books />],
    [ActivePage.MUSIC, <Music />],
    [ActivePage.THOUGHTS, <Thoughts />],
    [ActivePage.CONTACT, <Contact />],
]);

function getCurrentPage(currentPage: ActivePage): JSX.Element | null {
    const page = pageMap.get(currentPage);
    if (!page) {
        return null;
    }
    return page;
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
