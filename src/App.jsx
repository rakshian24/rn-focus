import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { colors } from './utils/colors';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t: message, i18n: { changeLanguage } } = useTranslation();
  return (
    <SafeAreaView style={styles.appViewContainer}>
      <View>
        <LanguageSwitcher message={message} changeLanguage={changeLanguage} />
        <HomeScreen message={message} />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  appViewContainer: {
    backgroundColor: colors.primary,
    display: "flex",
    flex: 1
  }
})
