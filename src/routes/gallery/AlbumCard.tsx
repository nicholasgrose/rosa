import React from 'react';
import { Card, CardActionArea, Box } from '@material-ui/core';
import PortraitAlbumPicture from './images/portraits/meghan_and_greg.jpg';
import AlbumTitle from './AlbumTitle';

interface AlbumCardState {
    hovering: boolean;
}

const albumPictureStyle = {
    backgroundImage: `url(${PortraitAlbumPicture})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

class AlbumCard extends React.Component<{}, AlbumCardState, {}> {
    constructor(props: {}) {
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
                        <AlbumTitle hovering={hovering} />
                    </Box>
                </CardActionArea>
            </Card>
        );
    }
}

export default AlbumCard;
