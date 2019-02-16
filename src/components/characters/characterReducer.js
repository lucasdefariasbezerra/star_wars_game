const INITIAL_STATE = {
    page: {},
    openChar: {},
    isModalOpen: false,
    modalType: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHARACTERS_LIST':
              return { ...state, page: action.payload };
        case 'OPEN_CHAR':
              return { ...state, openChar: action.payload};
        case 'OPEN_MODAL':
             return { ...state, isModalOpen: true, modalType: action.payload};
        case 'CLOSE_MODAL':
             return { ...state, isModalOpen: false, modalType: ''};
        default:
            return state;
    }
};