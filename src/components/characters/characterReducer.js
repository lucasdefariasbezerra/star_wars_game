const INITIAL_STATE = {
    page: {},
    openChar: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHARACTERS_LIST':
              return { ...state, page: action.payload };
        case 'OPEN_CHAR':
              return { ...state, openChar: action.payload };
        default:
            return state;
    }
};