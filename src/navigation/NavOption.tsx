import React from 'react';
import { Button } from '@material-ui/core';
import ActivePage from '../ActivePage';

interface NavOptionProps {
    changePage: (newPage: ActivePage) => void;
    optionName: string;
    optionPage: ActivePage;
}

function NavOption(props: NavOptionProps): JSX.Element {
    const { changePage, optionName, optionPage } = props;
    return (
        <Button onClick={(): void => changePage(optionPage)}>
            {optionName}
        </Button>
    );
}

export default NavOption;
