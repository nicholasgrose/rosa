import React from 'react';
import { Card, CardActionArea, Box } from '@material-ui/core';
import AlbumTitle from './AlbumTitle';
import AlbumCardProps from './AlbumCardProps';

interface AlbumCardState {
    hovering: boolean;
}

class AlbumCard extends React.Component<AlbumCardProps, AlbumCardState, {}> {
    constructor(props: AlbumCardProps) {
        super(props);
        this.state = {
            hovering: false,
        };
        this.render = this.render.bind(this);
        this.onHoverEnter = this.onHoverEnter.bind(this);
        this.onHoverLeave = this.onHoverLeave.bind(this);
    }

    onHoverEnter(): void {
        this.setState({
            hovering: true,
        });
    }

    onHoverLeave(): void {
        this.setState({
            hovering: false,
        });
    }

    render(): JSX.Element {
        const { hovering } = this.state;
        const { albumName, thumbnailPath } = this.props;
        const albumPictureStyle = {
            backgroundImage: `url(${thumbnailPath})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };
        return (
            <Card
                onMouseEnter={this.onHoverEnter}
                onMouseLeave={this.onHoverLeave}
            >
                <CardActionArea>
                    <Box
                        width="100%"
                        height="30vh"
                        display="flex"
                        flexDirection="column"
                        style={albumPictureStyle}
                    >
                        <Box flexGrow="1" />
                        <AlbumTitle hovering={hovering} albumName={albumName} />
                    </Box>
                </CardActionArea>
            </Card>
        );
    }
}

export default AlbumCard;
