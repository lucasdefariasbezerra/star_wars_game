

export const fetchCharacters = (pageUrl) => {
    console.log('here');
    return fetch(pageUrl).then(response => response.json())
                  .then((body) => {
                    console.log('body', body);
                    const action = { type: 'CHARACTERS_LIST', payload: body };
                    return action;
        });
};