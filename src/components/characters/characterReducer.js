const INITIAL_STATE = {
    page: {},
    openChar: {},
    isModalOpen: false,
    modalType: '',
    species: [],
    films: [],
    vehicles: [],
    planet: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHARACTERS_LIST':
              return { ...state, page: action.payload };
        case 'OPEN_CHAR':
              return { ...state, openChar: action.payload};
        case 'OPEN_MODAL':
             return { ...state, isModalOpen: true,
                modalType: action.payload.modalType,
                openChar: action.payload.character };
        case 'CLOSE_MODAL':
             return { ...state, isModalOpen: false, modalType: '', openChar: {}, species: [], films: []};
        case 'SET_SPECIES':
             return { ...state, species: state.species.concat(action.payload)};
        case 'SET_FILMS':
            return { ...state, films: state.films.concat(action.payload)};
        case 'SET_PLANET':
            return { ...state, planet: action.payload };
        case 'SET_VEHICLES':
            return { ...state, vehicles: state.vehicles.concat(action.payload) };
        default:
            return state;
    }
};