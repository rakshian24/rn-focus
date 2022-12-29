import { combineReducers } from "redux";
import { SET_ACTIVE_SCREEN } from "../actions";
import { SCREENS } from '../constants'

const initialState = {
  screen: SCREENS.HOME_SCREEN
}

export const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SCREEN:
      return {
        ...state,
        screen: action.screen
      }

    default:
      return state
  }
}

export default combineReducers({
  screenReducer
})

export const getActiveScreen = (state) => state.screenReducer.screen;

