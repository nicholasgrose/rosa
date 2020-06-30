import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import backgroundImage from './DSC_0998.jpg';
import './App.css';

const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

function App(): JSX.Element {
    return (
        <Box style={background} display="flex" width="100vw" height="100vh">
            <Box display="flex" alignContent="center" width="100%" height="100%">
                <Container maxWidth="lg">
                    <Paper className="main-page page-paper" square />
                </Container>
            </Box>
        </Box>
    );
}

export default App;
