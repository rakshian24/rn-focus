import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react'
import { useTranslation } from 'react-i18next';

const FocusInput = ({ focusInputText, setFocusInputText, handleOnInputSubmit }) => {
  const { t } = useTranslation();
  return (
    <View>
      <TextInput
        label={t("focus_input_label")}
        value={focusInputText}
        onChangeText={text => setFocusInputText(text)}
        onSubmitEditing={handleOnInputSubmit}
      />
    </View>
  )
}

export default FocusInput

const styles = StyleSheet.create({})