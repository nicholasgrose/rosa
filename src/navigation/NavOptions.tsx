import React from 'react';
import { Box, Button } from '@material-ui/core';
import ActivePage from '../ActivePage';

interface NavOptionsProps {
    changePage: (newPage: ActivePage) => void;
}

function triggerPageChange(
    props: NavOptionsProps,
    newPage: ActivePage
): (event: React.MouseEvent) => void {
    return (event: React.MouseEvent): void => {
        event.preventDefault();
        props.changePage(newPage);
    };
}

function NavOptions(props: NavOptionsProps): JSX.Element {
    return (
        <Box>
            <Button onClick={triggerPageChange(props, ActivePage.HOME)}>
                Home
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.ABOUT)}>
                About Me (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.RESUME)}>
                Resumé (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.GALLERY)}>
                Gallery (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.BOOKS)}>
                Books (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.MUSIC)}>
                Music (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.THOUGHTS)}>
                Thoughts (WIP)
            </Button>
            <Button onClick={triggerPageChange(props, ActivePage.CONTACT)}>
                Contact Me (WIP)
            </Button>
        </Box>
    );
}

export default NavOptions;
