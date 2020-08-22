import React from 'react';
import Box from '@material-ui/core/Box';
import ActivePage from '../ActivePage';
import NavOption from './NavOption';
import NavOptionList from './NavOptionList';
import Option from './Option';

interface NavOptionsProps {
    changePage: (newPage: ActivePage) => void;
}

function NavOptions(props: NavOptionsProps): JSX.Element {
    const { changePage } = props;
    return (
        <Box>
            {NavOptionList.map((option: Option) => {
                return (
                    <NavOption
                        changePage={changePage}
                        optionName={option.optionName}
                        optionPage={option.optionPage}
                        key={option.optionName}
                    />
                );
            })}
        </Box>
    );
}

export default NavOptions;
