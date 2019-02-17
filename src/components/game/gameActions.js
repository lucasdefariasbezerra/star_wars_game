
export const calculatePoints = (point, shot) => {
    return {
        type: 'CALCULATE_SCORE',
        payload: { point, shot }
    };
};

export const changeIsTakenInfo = (isInfo) => {
    console.log('info ', isInfo);
    return {
        type: 'CHECK_INFO',
        payload: isInfo
    };
};