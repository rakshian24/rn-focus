import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { colors } from '../utils/colors';
import RoundButton from '../components/RoundButton';
import CountDown from '../components/CountDown';
import { setAppState } from '../actions';
import { SCREENS } from '../constants';
import { getFocusItem, getFocusList } from '../reducers';

const FocusScreen = () => {
  const activeFocusItem = useSelector(getFocusItem);
  const focusList = useSelector(getFocusList);
  const { t: message } = useTranslation();
  const dispatch = useDispatch();
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(1);
  const [countDownLimit, setCountDownLimit] = useState(0);
  const [isTimeControlDisabled, setIsTimeControlDisabled] = useState(false);
  const [isStartBtnDisabled, setIsStartBtnDisabled] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    //This indicates that the countdown is complete.
    if (progress === 0) {
      setIsTimeControlDisabled(false);
      handleOnStopCountDown(true);
    }
  }, [progress]);

  useEffect(() => {
    if (!isPaused) {
      setIsStarted(true)
    }
  })

  useEffect(() => {
    if (countDownLimit === 0) {
      setIsStartBtnDisabled(true)
    } else {
      setIsStartBtnDisabled(false);
    }
  }, [countDownLimit])

  const trackProgress = (e) => {
    setProgress(e)
  }

  const handleOnTimeControlPress = (limit) => {
    setCountDownLimit(limit);
    setIsTimeControlDisabled(true);
  }

  const handleOnStopCountDown = (isFocusComplete = false) => {
    let newFocusList = [...focusList]
    if (isFocusComplete) {
      newFocusList = [...focusList, {
        key: uuid.v1(),
        name: activeFocusItem
      }]
    }
    dispatch(setAppState(SCREENS.HOME_SCREEN, activeFocusItem, isFocusComplete, newFocusList))
  }

  const getStartBtnText = () => {
    if (progress === 1) {
      return 'start'
    } else if (progress < 1 && isPaused) {
      return 'start'
    } else {
      return 'pause'
    }
  }

  const handleOnStart = () => {
    setIsPaused(!isPaused);
  }

  return (
    <View style={styles.focusContainer}>
      <View style={styles.timerWrapper}>
        <View style={styles.timerContainer}>
          <View style={styles.timer}>
            <CountDown countDownLimit={countDownLimit} isPaused={isPaused} trackProgress={trackProgress} isStarted={isStarted} />
          </View>
          <View style={styles.timerBody}>
            <Text style={styles.timerSubtitle}>{message('focussing_on')}</Text>
            <Text style={styles.focussedItem}>{activeFocusItem}</Text>
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={progress} color={colors.lightBlue2} style={{ height: 10, width: "100%" }} />
        </View>
      </View>
      <View style={styles.timerController}>
        <View style={styles.timerControllerBtnsContainer}>
          <RoundButton width={65} buttonText={10} buttonTextSize={20} handleOnSubmit={() => handleOnTimeControlPress(10)} isDisabled={isTimeControlDisabled} style={{backgroundColor: colors.lightBlue1}} />
          <RoundButton width={65} buttonText={15} buttonTextSize={20} handleOnSubmit={() => handleOnTimeControlPress(15)} isDisabled={isTimeControlDisabled} />
          <RoundButton width={65} buttonText={20} buttonTextSize={20} handleOnSubmit={() => handleOnTimeControlPress(20)} isDisabled={isTimeControlDisabled} />
        </View>
        <View style={styles.startCountDownContainer}><RoundButton width={110} buttonText={message(getStartBtnText())} buttonTextSize={20} handleOnSubmit={() => handleOnStart()} isDisabled={isStartBtnDisabled} /></View>
        <View style={styles.stopCountDownContainer}><RoundButton width={50} buttonText={'X'} buttonTextSize={20} handleOnSubmit={() => handleOnStopCountDown()} /></View>
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
    paddingTop: 35,
  },
  timerContainer: {
    width: "75%",
    display: "flex",
    height: 180,
    alignItems: "center",
    justifyContent: "space-around",
  },
  timer: {
    backgroundColor: colors.tertiary,
    paddingTop: 12,
    paddingBottom: 12,
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