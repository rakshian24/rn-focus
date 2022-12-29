export const SET_APP_STATE = 'SET_APP_STATE';

export const setAppState = (screen, focusItem, isFocusComplete = false, focusList= []) => ({
    type: SET_APP_STATE,
    screen,
    focusItem,
    isFocusComplete,
    focusList
})