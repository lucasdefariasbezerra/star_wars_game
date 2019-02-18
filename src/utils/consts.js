const BUTTON = 'BUTTON';
const PREVIOUS = 'PREVIOUS';
const NEXT = 'NEXT';
const DEFAULT_IMAGE = 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg';
const GUESS_MODAL = 'GUESS_MODAL';
const INFO_MODAL = 'INFO_MODAL';
const SET_SPECIES = 'SET_SPECIES';
const SET_FILMS = 'SET_FILMS';
const SET_PLANET = 'SET_PLANET';
const SET_VEHICLES = 'SET_VEHICLES';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const DEFAULT_URL = 'https://swapi.co/api/people/?page=1';

const TOASTER_TEMPLATE = {
    type: 'success',
    icon: 'info',
    title: 'Pontuação',
    description: '',
    time: 2000,
    onClick: () => {},
    onClose: () => {}
};


export default {
    BUTTON,
    PREVIOUS,
    NEXT,
    DEFAULT_IMAGE,
    GUESS_MODAL,
    INFO_MODAL,
    SET_SPECIES,
    SET_FILMS,
    SET_PLANET,
    SET_VEHICLES,
    TOASTER_TEMPLATE,
    ERROR,
    SUCCESS,
    DEFAULT_URL
};