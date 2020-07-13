import React from 'react';
import { Box, Button } from '@material-ui/core';

function ignore(event: React.MouseEvent): void {
    event.preventDefault();
}

function NavOptions(): JSX.Element {
    return (
        <Box alignItems="center">
            <Button href="/rosa/home" onClick={ignore}>
                Home
            </Button>
            <Button href="/rosa/about" onClick={ignore}>
                About Me (WIP)
            </Button>
            <Button href="/rosa/resume" onClick={ignore}>
                Resumé (WIP)
            </Button>
            <Button href="/rosa/gallery" onClick={ignore}>
                Gallery (WIP)
            </Button>
            <Button href="/rosa/books" onClick={ignore}>
                Books (WIP)
            </Button>
            <Button href="/rosa/music" onClick={ignore}>
                Music (WIP)
            </Button>
            <Button href="/rosa/thoughts" onClick={ignore}>
                Thoughts (WIP)
            </Button>
            <Button href="/rosa/contact" onClick={ignore}>
                Contact Me (WIP)
            </Button>
        </Box>
    );
}

export default NavOptions;
