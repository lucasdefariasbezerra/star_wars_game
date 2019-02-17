const INITIAL_STATE = {
   guess: '',
   point: 0,
   infoChecked: false,
   shots: 10
};

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'CALCULATE_SCORE':
              return { ...state, point: action.payload.point, shots: action.payload.shot };
        case 'CHECK_INFO':
              return { ...state, infoChecked: action.payload };
        default:
            return state;
    }
};