import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PageContent from './PageContent';

function App(): JSX.Element {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#2e7d32',
            },
            secondary: {
                main: '#03a9f4',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <PageContent />
        </ThemeProvider>
    );
}

export default App;
