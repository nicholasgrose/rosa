import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { fade, useTheme } from '@material-ui/core';
import NavContent from './NavContent';

function Nav(): JSX.Element {
    const theme = useTheme();
    const navBar = {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
    };

    return (
        <Box>
            <AppBar style={navBar}>
                <Toolbar>
                    <NavContent />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default Nav;
