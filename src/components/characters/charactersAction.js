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