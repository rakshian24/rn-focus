import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { colors } from '../utils/colors';

const { white, grey } = colors;

const RoundButton = ({ width = 50, buttonText = '+', buttonTextSize = 25, buttonTextColor = white, handleOnInputSubmit, isDisabled }) => {
  return (
    <TouchableOpacity style={[{
      ...styles.roundButton,
      width,
      height: width,
      borderRadius: width / 2,
      borderColor: isDisabled ? grey : white
    }]}
      onPress={handleOnInputSubmit}
      disabled={isDisabled}>

      <Text style={{
        color: isDisabled ? grey : buttonTextColor,
        fontSize: buttonTextSize,
        borderColor: isDisabled ? grey : white
      }}>
        {buttonText}
      </Text>

    </TouchableOpacity>
  )
}

export default RoundButton

const styles = StyleSheet.create({
  roundButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  }
})