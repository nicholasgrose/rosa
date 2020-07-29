import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PageContent from './PageContent';

function App(): JSX.Element {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#028e53',
            },
            secondary: {
                main: '#f44336',
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
