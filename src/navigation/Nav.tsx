import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { fade, useTheme } from '@material-ui/core';
import logo from '../initial-logo.svg';

function Nav(): JSX.Element {
    const theme = useTheme();
    const navBar = {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
    };

    return (
        <>
            <AppBar style={navBar}>
                <Toolbar>
                    <Box display="flex" alignItems="center" width="100%">
                        <Box flexGrow="1" display="flex" alignItems="center">
                            <Box display="flex" alignItems="center">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    height="55"
                                    width="55"
                                />
                            </Box>
                            <Box
                                flexGrow="1"
                                ml="2%"
                                fontWeight="100"
                                fontSize="1.15rem"
                            >
                                <p>Nicholas Rose</p>
                            </Box>
                        </Box>
                        <Box alignItems="center">
                            <Button>Home</Button>
                            <Button>About Me (WIP)</Button>
                            <Button>Resumé (WIP)</Button>
                            <Button>Gallery (WIP)</Button>
                            <Button>Books (WIP)</Button>
                            <Button>Music (WIP)</Button>
                            <Button>Thoughts (WIP)</Button>
                            <Button>Contact Me (WIP)</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Nav;
