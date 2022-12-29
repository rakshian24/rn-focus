import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { convertSecondsToHHMMSS } from '../utils/timeConvert';
const CountDown = ({ countDownLimit, isPaused, trackProgress }) => {

  const [seconds, setSeconds] = useState(countDownLimit);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    setSeconds(countDownLimit)
  }, [countDownLimit])

  useEffect(() => {
    if (countDownLimit > 0) {
      setProgress(seconds / countDownLimit)
    } else {
      setProgress(0)
    }
  }, [seconds]);

  useEffect(() => {
    trackProgress(progress)
  }, [progress])

  useEffect(() => {
    if (countDownLimit > 0) {
      const interval = setInterval(() => {
        if (!isPaused) {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDownLimit, seconds, isPaused]);

  return (
    <View>
      <Text style={styles.timerTitle}>{convertSecondsToHHMMSS(seconds)}</Text>
    </View>
  )
}

export default CountDown;

const styles = StyleSheet.create({
  timerTitle: {
    color: colors.white,
    fontSize: 60,
    fontWeight: "600",
    letterSpacing: 1.5
  },
})