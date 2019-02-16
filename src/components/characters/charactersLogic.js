import images from '../../utils/images';

const getImage = (name) => {
    const character = images.filter((img) => img.key === name);
    const object = Object.assign({}, ...character.map(item => ({ key: item })));
    const { key } = object;
    return key.image;
};

export const mapCharactersPage = (page) => {
    const { results } = page;
    const mappedResults = results.map((ch) => {
        const image = getImage(ch.name);
        const mappedChar = {...ch, image };
        return mappedChar;
    });
    const mappedPage = {...page, results: mappedResults };
    return mappedPage;
};



