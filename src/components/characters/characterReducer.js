const INITIAL_STATE = {
    page: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHARACTERS_LIST':
              return { ...state, page: action.payload };
        default:
            return state;
    }
};