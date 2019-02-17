import { mapCharactersPage } from './charactersLogic';
import consts from '../../utils/consts';


export const fetchCharacters = (pageUrl) => {
    return dispatch => {
      return fetch(pageUrl).then(response => response.json())
             .then((body) => {
                 dispatch(mapResults(body));
            });
    };
};

export const mapResults = (page) => {
  const mappedPage = mapCharactersPage(page);
  const action = { type: 'CHARACTERS_LIST', payload: mappedPage };
  return action;
};

export const openModal = (modalType, character) => {
    const payload = { modalType, character };
    return { type: 'OPEN_MODAL', payload };
};

export const closeModal = () => {
    return { type: 'CLOSE_MODAL' };
};

const resolvePromise = (fetch, action, field) => {
    return fetch.then(result => result.json())
    .then(data => {
        return {
            type: action,
            payload: data[field]
        };
    });
};

export const fetchCharacterDetails = (character) => {
    return dispatch => {
        const { species, films, homeworld, vehicles } = character;
        const speciesFetchList = species.map((specie) => fetch(specie));
        const filmsFetchList = films.map((film) => fetch(film));
        const vehiclesFecthList = vehicles.map((vehicle) => fetch(vehicle));

        speciesFetchList.forEach(fetch => {
            dispatch(resolvePromise(fetch, consts.SET_SPECIES, 'name'));
        });

        filmsFetchList.forEach(fetch => {
            dispatch(resolvePromise(fetch, consts.SET_FILMS, 'title'));
        });

        vehiclesFecthList.forEach(fetch => {
            dispatch(resolvePromise(fetch, consts.SET_VEHICLES, 'name'));
        });

        const fetchPlanetRequest = fetch(homeworld);
        dispatch(resolvePromise(fetchPlanetRequest, consts.SET_VEHICLES, 'name'));

    };
};