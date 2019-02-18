const INITIAL_STATE = {
   guess: '',
   point: 0,
   infoChecked: false,
   shots: 2,
   specialModalOpen: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CALCULATE_SCORE':
              return { ...state, point: action.payload.point, shots: action.payload.shot };
        case 'CHECK_INFO':
              return { ...state, infoChecked: action.payload };
        case 'HANDLE_SPECIAL':
              return { ...state, specialModalOpen: action.payload };
        case 'RESET_CONFIG':
              return { ...state, point: 0, infoChecked: false, shots: 2 };
        default:
            return state;
    }
};