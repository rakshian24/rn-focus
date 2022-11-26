import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.appViewContainer}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  appViewContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  }
})
