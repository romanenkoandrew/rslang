import PropTypes from 'prop-types';
import MainPage from '../mainPage/index';
import AboutProject from '../aboutProject/index';
import AboutTeam from '../aboutTeam/index';
import Sprint from '../sprint/Sprint';
import SpeakItGame from '../speakIt/index';
import Vocabulary from '../vocabulary';
import SavannahGame from '../savannah';
import MainGame from '../mainGame/index';
import EnglishPuzzle from '../english-puzzle';
import SettingsPage from '../settingsPage';
import AnagrammGame from '../anagrammGame';

const pages = [
    {
        component: MainPage,
        title: 'Main Page',
        url: '/',
        exact: true,
        img: '',
    },
    {
        component: MainGame,
        title: 'Words learning',
        url: '/learn',
        exact: false,
        img: '/assets/images/learn.jpg',
    },
    {
        component: AboutProject,
        title: 'About Project',
        url: '/aboutproject',
        exact: true,
        img: '/assets/images/angry.jpg',
    },
    {
        component: AboutTeam,
        title: 'About Team',
        url: '/aboutteam',
        img: '/assets/images/happy.jpg',
        exact: true,
    },
    {
        component: Vocabulary,
        title: 'Vocabulary',
        url: '/vocabulary',
        exact: false,
        img: '/assets/images/scared.jpg',
    },
    {
        component: Sprint,
        title: 'Sprint',
        url: '/sprint',
        img: '/assets/images/sprint.png',
        exact: false,
    },
    {
        component: SpeakItGame,
        title: 'SpeakIt',
        url: '/speakit',
        img: '/assets/images/start-image.jpg',
        exact: true,
    },
    {
        component: EnglishPuzzle,
        title: 'English-Puzzle',
        url: '/englishpuzzle',
        img: '/assets/images/start-image.jpg',
    },
    {
        component: SavannahGame,
        title: 'Savannah',
        url: '/Savannah',
        img: '/assets/images/draw.jpg',
        exact: true,
    },
    {
        component: SettingsPage,
        title: 'Settings',
        url: '/settings',
        img: '/assets/images/angry.jpg',
        exact: true,
    },
    {
        component: AnagrammGame,
        title: 'Anagramm Game',
        url: '/anagramm',
        exact: true,
        img: '/assets/images/angry.jpg',
    },
];

export const pagePropType = PropTypes.exact({
    component: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
});

export default pages;
