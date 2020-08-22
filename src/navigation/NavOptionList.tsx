import Option from './Option';
import ActivePage from '../ActivePage';

const NavOptionList: Array<Option> = [
    {
        optionName: 'Home',
        optionPage: ActivePage.HOME,
    },
    {
        optionName: 'About Me',
        optionPage: ActivePage.ABOUT,
    },
    {
        optionName: 'Resumé',
        optionPage: ActivePage.RESUME,
    },
    {
        optionName: 'Gallery',
        optionPage: ActivePage.GALLERY,
    },
    {
        optionName: 'Books',
        optionPage: ActivePage.BOOKS,
    },
    {
        optionName: 'Music',
        optionPage: ActivePage.MUSIC,
    },
    {
        optionName: 'Thoughts',
        optionPage: ActivePage.THOUGHTS,
    },
    {
        optionName: 'Contact Me',
        optionPage: ActivePage.CONTACT,
    },
];

export default NavOptionList;
