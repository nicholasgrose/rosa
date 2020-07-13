import React from 'react';
import { Box } from '@material-ui/core';
import logo from '../initial-logo.svg';

function NavTitle(): JSX.Element {
    return (
        <Box flexGrow="1" display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
                <img src={logo} alt="Logo" height="55" width="55" />
            </Box>
            <Box flexGrow="1" ml="2%" fontWeight="100" fontSize="1.7rem">
                Nicholas Rose
            </Box>
        </Box>
    );
}

export default NavTitle;
