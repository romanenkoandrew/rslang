const getInitialDateStaticstics = (dayWords) => ({
    d: dayWords,
    l: 0,
    s: 0,
    e: 0,
    sq: 0,
    msq: 0,
    n: 0,
});

const convertDate = (date) => {
    const hoursDif =
        date.getHours() - date.getUTCHours() < 0
            ? 24 + (date.getHours() - date.getUTCHours())
            : date.getHours() - date.getUTCHours();
    const dateClone = new Date(date);
    dateClone.setHours(date.getHours() + hoursDif);
    return `${dateClone.toISOString().slice(0, 10).replace(/-/g, '')}`;
};

const getDate = () => convertDate(new Date());

const getDateAndTime = () => `${new Date().toISOString().slice(0, 16).replace(/-|T|:/g, '')}`;

const miniGames = {
    savannah: {
        name: 'Savannah',
        alias: 'sav',
    },
    sprint: {
        name: 'Sprint',
        alias: 'spr',
    },
    speakIt: {
        name: 'SpeakIt',
        alias: 'spk',
    },
    englishPuzzle: {
        name: 'English Puzzle',
        alias: 'enp',
    },
    anagramm: {
        name: 'Anagramm',
        alias: 'ang',
    },
    audition: {
        name: 'Audition',
        alias: 'aud',
    },
};

export default {
    getInitialDateStaticstics,
    convertDate,
    getDate,
    getDateAndTime,
    miniGames,
};
