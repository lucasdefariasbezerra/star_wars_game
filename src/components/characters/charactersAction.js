import { mapCharactersPage } from './charactersLogic';


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

const fetchSpecies = (fetch) => {
    return fetch.then(result => result.json())
    .then(data => {
        console.log('data zxzx ', data);
        return {
            type: 'SET_SPECIES',
            payload: data.name
        };
    });
};

const fetchFilms = (fetch) => {
    return fetch.then(result => result.json())
    .then(data => {
        console.log('data zxzx ', data);
        return {
            type: 'SET_FILMS',
            payload: data.title
        };
    });
};

export const fetchCharacterDetails = (character) => {
    return dispatch => {
        console.log('character ', character );
        const { species, films } = character;
        const speciesFetchList = species.map((specie) => fetch(specie));
        const filmsFetchList = films.map((film) => fetch(film));

        speciesFetchList.forEach(fetch => {
            dispatch(fetchSpecies(fetch));
        });

        filmsFetchList.forEach(fetch => {
            dispatch(fetchFilms(fetch));
        });
    };
};