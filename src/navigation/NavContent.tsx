import React from 'react';
import { Box } from '@material-ui/core';
import NavTitle from './NavTitle';
import NavOptions from './NavOptions';

interface NavContentState {
    hovering: boolean;
}

class NavContent extends React.Component<{}, NavContentState, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            hovering: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    private handleMouseEnter(): void {
        this.setState({
            hovering: true,
        });
    }

    private handleMouseLeave(): void {
        this.setState({
            hovering: false,
        });
    }

    public render(): JSX.Element {
        return (
            <Box
                display="flex"
                alignItems="center"
                width="100%"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <NavTitle />
                <NavOptions hovering={this.state.hovering} />
            </Box>
        );
    }
}

export default NavContent;
