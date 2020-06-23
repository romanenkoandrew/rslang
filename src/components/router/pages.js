import PropTypes from 'prop-types';
import MainPage from '../mainPage/index';
import AboutProject from '../aboutProject/index';
import AboutTeam from '../aboutTeam/index';
import EnglishPuzzle from '../english-puzzle';

const pages = [
    {
        component: MainPage,
        title: 'Main Page',
        url: '/',
        img: '',
    },
    {
        component: AboutProject,
        title: 'About Project',
        url: '/aboutproject',
        img: '/assets/images/angry.jpg',
    },
    {
        component: AboutTeam,
        title: 'About Team',
        url: '/aboutteam',
        img: '/assets/images/scared.jpg',
    },
    {
        component: EnglishPuzzle,
        title: 'English-Puzzle',
        url: '/englishpuzzle',
        img: '/assets/images/start-image.jpg',
    },
];

export const pagePropType = PropTypes.exact({
    component: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
});

export default pages;
