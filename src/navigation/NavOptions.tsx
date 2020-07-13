import React from 'react';
import { Box, Button } from '@material-ui/core';

function NavOptions(): JSX.Element {
    return (
        <Box alignItems="center">
            <Button href="/home">Home</Button>
            <Button href="/about">About Me (WIP)</Button>
            <Button href="/resume">Resumé (WIP)</Button>
            <Button href="/gallery">Gallery (WIP)</Button>
            <Button href="/books">Books (WIP)</Button>
            <Button href="/music">Music (WIP)</Button>
            <Button href="/thoughts">Thoughts (WIP)</Button>
            <Button href="/contact">Contact Me (WIP)</Button>
        </Box>
    );
}

export default NavOptions;
