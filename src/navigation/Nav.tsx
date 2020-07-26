import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { fade, useTheme } from '@material-ui/core';
import NavContent from './NavContent';
import ActivePage from '../ActivePage';

interface NavProps {
    changePage: (newPage: ActivePage) => void;
}

function Nav(props: NavProps): JSX.Element {
    const { changePage: onPageChange } = props;

    const theme = useTheme();
    const navBar = {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
    };

    return (
        <Box>
            <AppBar style={navBar}>
                <Toolbar>
                    <NavContent changePage={onPageChange} />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default Nav;
