export const SET_APP_STATE = 'SET_APP_STATE';

export const setAppState = (screen, focusItem, focusList= []) => ({
    type: SET_APP_STATE,
    screen,
    focusItem,
    focusList
})