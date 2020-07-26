import React from 'react';
import { Box } from '@material-ui/core';
import NavTitle from './NavTitle';
import NavOptions from './NavOptions';
import ActivePage from '../ActivePage';

interface NavContentProps {
    changePage: (newPage: ActivePage) => void;
}

function NavContent(props: NavContentProps): JSX.Element {
    const { changePage: onPageChange } = props;

    return (
        <Box display="flex" alignItems="center" width="100%">
            <NavTitle />
            <NavOptions changePage={onPageChange} />
        </Box>
    );
}

export default NavContent;
