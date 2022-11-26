import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import FocusInput from '../components/FocusInput'
import FocussedList from '../components/FocussedList'
import RoundButton from '../components/RoundButton'
import { colors } from '../utils/colors'

const Home = ({ message }) => {
  const [focusList, setFocusList] = useState([]);
  const [focusInputText, setFocusInputText] = useState('');

  const handleOnInputSubmit = () => {
    setFocusList([...focusList, {
      key: uuid.v1(),
      name: focusInputText
    }]);
    setFocusInputText('');
  }
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <FocusInput focusInputText={focusInputText} setFocusInputText={setFocusInputText} handleOnInputSubmit={handleOnInputSubmit} />
        </View>
        <View style={styles.roundedBtn}>
          <RoundButton handleOnInputSubmit={handleOnInputSubmit} isDisabled={!focusInputText} />
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