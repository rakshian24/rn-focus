import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const FocussedList = ({ focusList }) => {
  return (
    <View style={styles.focusList}>
      <FlatList
        data={focusList}
        renderItem={({ item }) => (
          <Text style={styles.focusListItem}><Text style={styles.hyphen}>-  </Text>{item.name}</Text>
        )} />
    </View>
  )
}

export default FocussedList

const styles = StyleSheet.create({
  focusList: {
    paddingLeft: 12
  },
  hyphen: {
    fontWeight: "600"
  },

  focusListItem: {
    color: colors.white,
    fontSize: 16,
    paddingBottom: 7
  }
})