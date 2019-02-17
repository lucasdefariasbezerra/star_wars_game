const INITIAL_STATE = {
   guess: '',
   point: 0,
   infoChecked: false,
   shots: 10
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CALCULATE_SCORE':
              return { ...state, point: action.payload.point, shots: action.payload.shot };
        default:
            return state;
    }
};