import React from 'react';
import {
    Box,
    Container,
    Paper,
    AppBar,
    Button,
    // useTheme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { fade, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import backgroundImage from './DSC_0998.jpg';
import './App.css';

const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

function App(): JSX.Element {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#2e7d32',
            },
            secondary: {
                main: '#03a9f4',
            },
        },
    });
    // const currentTheme = useTheme();
    const mainPage = {
        backgroundColor: fade(theme.palette.background.default, 0.75),
        height: '100%',
        alignItems: 'center',
    };
    const navBar = {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
    };
    return (
        <ThemeProvider theme={theme}>
            <Box style={background} display="flex" width="100vw" height="100vh">
                <AppBar style={navBar}>
                    <Toolbar>
                        <Button>Home</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg">
                    <Paper style={mainPage} square>
                        <Typography className="main-text" variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse ut libero eu arcu imperdiet
                            ullamcorper. Vivamus pulvinar magna consequat justo
                            efficitur, non pharetra ligula luctus. Sed pharetra
                            ex sit amet augue auctor congue. Nunc blandit erat
                            ac velit ornare scelerisque. Donec neque urna,
                            lobortis laoreet felis ut, tristique pulvinar
                            tortor. Integer eget ligula ac felis pharetra
                            fringilla. Donec feugiat velit eu fringilla congue.
                            Nunc nec nunc in mi ornare ullamcorper sit amet non
                            neque. Pellentesque aliquam ut sapien quis varius.
                            Praesent lectus risus, eleifend quis tincidunt
                            varius, lobortis a justo.
                            <br />
                            <br />
                            Quisque leo nisi, aliquam eget vestibulum a,
                            fringilla quis enim. Curabitur nec orci condimentum
                            justo condimentum varius. Praesent dolor ex,
                            sollicitudin quis mauris et, placerat condimentum
                            arcu. Sed consectetur, lacus eget rutrum finibus,
                            felis sem laoreet eros, at faucibus dolor turpis ac
                            lorem. Mauris nulla elit, ultricies auctor varius
                            quis, facilisis non magna. Vestibulum posuere sem
                            enim, vestibulum tincidunt felis mattis vitae.
                            Mauris at metus ac sem eleifend malesuada. Phasellus
                            accumsan ligula sit amet tempus aliquet. Suspendisse
                            et justo vehicula, tempus odio eget, malesuada orci.
                            Proin commodo pulvinar quam ac tempor.
                            <br />
                            <br />
                            Duis consequat sed nisl sed ultricies. Vivamus eget
                            ipsum turpis. Integer vitae faucibus ligula. Mauris
                            dapibus consectetur velit sit amet blandit. Praesent
                            pulvinar eros non fermentum maximus. Suspendisse sed
                            viverra nisi, ac bibendum erat. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                            Proin in facilisis magna. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Nullam dui justo, faucibus eu
                            elit vitae, condimentum hendrerit ex. Aliquam erat
                            volutpat. Fusce sit amet pharetra eros, sed dictum
                            lacus. Curabitur nec orci sit amet nulla tristique
                            pharetra.
                            <br />
                            <br />
                            Vestibulum volutpat varius lacus, ac accumsan mauris
                            suscipit at. Sed elementum, elit a fringilla
                            commodo, turpis odio congue neque, in molestie
                            libero lectus nec nisi. Aenean vel lectus semper
                            molestie dui fermentum, efficitur neque. Morbi sit
                            amet venenatis felis, sed vehicula purus. Quisque
                            sollicitudin convallis nibh et maximus. Class aptent
                            taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Nullam nisl lorem,
                            sagittis at mattis vitae, fringilla in odio. Nulla
                            facilisis posuere orci ut molestie. Nulla venenatis
                            eleifend accumsan. In id sodales mi. Integer
                            porttitor lorem nec eros vestibulum, id sollicitudin
                            quam commodo. In convallis sed dui in dictum. Sed ac
                            augue nibh. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. Integer euismod velit
                            ante, porttitor sollicitudin purus varius at.
                            <br />
                            <br />
                            Donec enim lorem, rutrum non fermentum ut, sodales
                            vel felis. Maecenas rhoncus rutrum orci. Donec id
                            auctor leo, sit amet consequat dolor. Nunc varius
                            ante a elit auctor, vel scelerisque velit iaculis.
                            Nam sollicitudin, ante a tempus interdum, turpis
                            quam sagittis purus, ut vestibulum justo ante sed
                            mi. Vivamus dapibus, sapien sed tincidunt sagittis,
                            libero diam dapibus ipsum, ac ornare dui libero
                            vitae lacus. Nunc in pellentesque libero. Cras sit
                            amet rutrum tortor. Praesent pharetra fringilla
                            ipsum in scelerisque.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
