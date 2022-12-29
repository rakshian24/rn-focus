import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { colors } from './utils/colors';
import { useTranslation } from 'react-i18next';
import FocusScreen from './screens/FocusScreen';
import { useSelector } from 'react-redux';
import { getActiveScreen } from './reducers';
import { SCREENS } from './constants';

const { HOME_SCREEN, FOCUS_SCREEN } = SCREENS;

const App = () => {
  const { t: message, i18n: { changeLanguage } } = useTranslation();
  const activeScreen = useSelector(getActiveScreen);

  const renderScreen = () => {
    if (activeScreen === HOME_SCREEN) {
      return <HomeScreen message={message} />
    } else if (activeScreen === FOCUS_SCREEN) {
      return <FocusScreen message={message} />
    }
  }

  return (
    <SafeAreaView style={styles.appViewContainer}>
      <View>
        <LanguageSwitcher message={message} changeLanguage={changeLanguage} />
        {renderScreen()}
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
