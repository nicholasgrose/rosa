import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { fade, useTheme } from '@material-ui/core';
import NavTitle from './NavTitle';
import NavOptions from './NavOptions';

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
                        <NavTitle />
                        <NavOptions />
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Nav;
