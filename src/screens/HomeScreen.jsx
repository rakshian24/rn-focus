import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react';
import FocusInput from '../components/FocusInput'
import FocussedList from '../components/FocussedList'
import RoundButton from '../components/RoundButton'
import { colors } from '../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setAppState } from '../actions';
import { SCREENS } from '../constants';
import { getFocusList } from '../reducers';

const Home = ({ message }) => {
  const [focusInputText, setFocusInputText] = useState('');
  const dispatch = useDispatch();
  const focusList = useSelector(getFocusList);

  const handleOnInputSubmit = () => {
    if (focusInputText) {
      dispatch(setAppState(SCREENS.FOCUS_SCREEN, focusInputText, false, focusList));
    }
    setFocusInputText('');
  }
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <FocusInput focusInputText={focusInputText} setFocusInputText={setFocusInputText} handleOnInputSubmit={handleOnInputSubmit} />
        </View>
        <View style={styles.roundedBtn}>
          <RoundButton handleOnSubmit={handleOnInputSubmit} isDisabled={!focusInputText} />
        </View>
      </View>

      <View style={styles.focusedListContainer}>
        <View><Text style={styles.focusedListTitle}>{message('focus_list_title')}</Text></View>
        <FocussedList focusList={focusList} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.95
  },
  focusedListContainer: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16
  },
  focusedListTitle: {
    fontSize: 17,
    color: colors.white,
    fontWeight: '600',
    paddingBottom: 12
  }
})