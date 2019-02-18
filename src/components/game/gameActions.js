
export const calculatePoints = (point, shot) => {
    return {
        type: 'CALCULATE_SCORE',
        payload: { point, shot }
    };
};

export const changeIsTakenInfo = (isInfo) => {
    return {
        type: 'CHECK_INFO',
        payload: isInfo
    };
};

export const handleSpecialModal = (flag) => {
    return {
        type: 'HANDLE_SPECIAL',
        payload: flag
    };
};

export const resetGameDefaultConfig = () => {
    return {
        type: 'RESET_CONFIG'
    };
}