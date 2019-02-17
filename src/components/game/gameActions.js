
export const calculatePoints = (point, shot) => {
    return {
        type: 'CALCULATE_SCORE',
        payload: { point, shot }
    };
};