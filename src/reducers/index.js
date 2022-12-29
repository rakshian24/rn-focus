import { combineReducers } from "redux";
import { SET_APP_STATE } from "../actions";
import { SCREENS } from '../constants'

const initialState = {
  screen: SCREENS.HOME_SCREEN,
  focusItem: '',
  focusList: []
}

export const appReducer = (state = initialState, action) => {
  const { type, screen, focusItem, focusList } = action;
  switch (type) {
    case SET_APP_STATE:
      return {
        ...state,
        screen,
        focusItem,
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
export const getFocusList = (state) => state.appReducer.focusList;

