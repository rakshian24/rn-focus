import { combineReducers } from "redux";
import { SET_APP_STATE } from "../actions";
import { SCREENS } from '../constants'

const initialState = {
  screen: SCREENS.HOME_SCREEN,
  focusItem: '',
  isFocusComplete: false,
  focusList: []
}

export const appReducer = (state = initialState, action) => {
  const { type, screen, focusItem, focusList, isFocusComplete } = action;
  switch (type) {
    case SET_APP_STATE:
      return {
        ...state,
        screen,
        focusItem,
        isFocusComplete,
        focusList
      }

    default:
      return state
  }
}

export default combineReducers({
  appReducer
})

export const getActiveScreen = (state) => state.appReducer.screen;
export const getFocusItem = (state) => state.appReducer.focusItem;
export const getIsFocusComplete = (state) => state.appReducer.isFocusComplete;
export const getFocusList = (state) => state.appReducer.focusList;

