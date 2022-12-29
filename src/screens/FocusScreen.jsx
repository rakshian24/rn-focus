import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '../utils/colors';
import RoundButton from '../components/RoundButton';
import { ProgressBar } from 'react-native-paper';
import CountDown from '../components/CountDown';
import { useDispatch } from 'react-redux';
import { setActiveScreen } from '../actions';
import { SCREENS } from '../constants';

const FocusScreen = () => {
  const { t: message } = useTranslation();
  const dispatch = useDispatch();
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(1);
  const [countDownLimit, setCountDownLimit] = useState(0);
  const [isTimeControlDisabled, setIsTimeControlDisabled] = useState(false);

  useEffect(() => {
    if (progress === 0) {
      setIsTimeControlDisabled(false);
      // handleOnStopCountDown();
    }
  }, [progress])

  const trackProgress = (e) => {
    setProgress(e)
  }

  const handleOnTimeControlPress = (limit) => {
    setCountDownLimit(limit);
    setIsTimeControlDisabled(true);
  }

  const handleOnStopCountDown = () => {
    dispatch(setActiveScreen(SCREENS.HOME_SCREEN))
  }

  return (
    <View style={styles.focusContainer}>
      <View style={styles.timerWrapper}>
        <View style={styles.timerContainer}>
          <View style={styles.timer}>
            <CountDown countDownLimit={countDownLimit} isPaused={isPaused} trackProgress={trackProgress} />
          </View>
          <View style={styles.timerBody}>
            <Text style={styles.timerSubtitle}>{message('focussing_on')}</Text>
            <Text style={styles.focussedItem}>Code</Text>
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={progress} color={colors.lightBlue2} style={{ height: 10, width: "100%" }} />
        </View>
      </View>
      <View style={styles.timerController}>
        <View style={styles.timerControllerBtnsContainer}>
          <RoundButton width={75} buttonText={10} buttonTextSize={25} handleOnSubmit={() => handleOnTimeControlPress(10)} isDisabled={isTimeControlDisabled} />
          <RoundButton width={75} buttonText={15} buttonTextSize={25} handleOnSubmit={() => handleOnTimeControlPress(15)} isDisabled={isTimeControlDisabled} />
          <RoundButton width={75} buttonText={20} buttonTextSize={25} handleOnSubmit={() => handleOnTimeControlPress(20)} isDisabled={isTimeControlDisabled} />
        </View>
        <View style={styles.startCountDownContainer}><RoundButton width={130} buttonText={message(isPaused ? 'start' : 'pause')} buttonTextSize={28} handleOnSubmit={() => setIsPaused(!isPaused)} /></View>
        <View style={styles.stopCountDownContainer}><RoundButton width={60} buttonText={'X'} buttonTextSize={25} handleOnSubmit={() => handleOnStopCountDown()} /></View>
      </View>
    </View>
  )
}

export default FocusScreen

const styles = StyleSheet.create({
  focusContainer: {
    display: 'flex',
    height: '100%'
  },
  timerWrapper: {
    height: '35%',
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingTop: 35
  },
  timerContainer: {
    width: "75%",
    display: "flex",
    height: 200,
    alignItems: "center",
    justifyContent: "space-between"
  },
  timer: {
    backgroundColor: colors.tertiary,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18
  },
  timerSubtitle: {
    textAlign: "center",
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
  },
  focussedItem: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4
  },
  progressBarContainer: {
    width: "100%",
  },
  timerController: {
    height: '65%',
    paddingTop: 40
  },
  timerControllerBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  startCountDownContainer: {
    paddingTop: 45,
    paddingBottom: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  stopCountDownContainer: {
    paddingTop: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
})