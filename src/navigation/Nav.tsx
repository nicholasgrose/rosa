import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { fade, useTheme } from '@material-ui/core';

function Nav(): JSX.Element {
    const theme = useTheme();
    const navBar = {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
    };

    return (
        <>
            <AppBar style={navBar}>
                <Toolbar>
                    <Button>Home</Button>
                    <Button>About Me (WIP)</Button>
                    <Button>Resumé (WIP)</Button>
                    <Button>Gallery (WIP)</Button>
                    <Button>Thoughts (WIP)</Button>
                    <Button>Contact Me (WIP)</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Nav;
