import React from 'react';
import Box from '@material-ui/core/Box';
import Nav from './navigation/Nav';
import Page from './routes/Page';
import backgroundImage from './schwangau-forest.jpg';
import ActivePage from './ActivePage';

const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

interface PageContentState {
    currentPage: ActivePage;
}

class PageContent extends React.Component<{}, PageContentState, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentPage: ActivePage.HOME,
        };
        this.changePage = this.changePage.bind(this);
    }

    public changePage(newPage: ActivePage): void {
        this.setState({
            currentPage: newPage,
        });
    }

    public render(): JSX.Element {
        const { currentPage } = this.state;
        return (
            <Box
                style={background}
                display="flex"
                flexDirection="column"
                width="100vw"
                height="100vh"
            >
                <Nav changePage={this.changePage} />
                <Page currentPage={currentPage} />
            </Box>
        );
    }
}

export default PageContent;
