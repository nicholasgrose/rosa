import React from 'react';
import Box from '@material-ui/core/Box';
import Nav from './navigation/Nav';
import Page from './routes/Page';
import backgroundImage from './schwangau-forest.jpg';

const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

function PageContent(): JSX.Element {
    return (
        <Box
            style={background}
            display="flex"
            flexDirection="column"
            width="100vw"
            height="100vh"
        >
            <Nav />
            <Page />
        </Box>
    );
}

export default PageContent;
