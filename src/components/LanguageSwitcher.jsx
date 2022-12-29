import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Drawer } from 'react-native-paper'
import React, { useState } from 'react';
import { colors } from '../utils/colors';

const LanguageSwitcher = ({ message, changeLanguage }) => {
  const [showLanguageDrawer, setShowLanguageDrawer] = useState(false);
  const [active, setActive] = React.useState('english');

  return (
    <View>
      <View style={styles.globeIconContainer}>
        <TouchableOpacity onPress={() => setShowLanguageDrawer(!showLanguageDrawer)}>
          <Icon name="language" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      {showLanguageDrawer && <View style={styles.drawerContainer}>
        <Drawer.Section title={<Text style={styles.drawerTitle}>Choose language</Text>}>
          <Drawer.Item
            label={message("english")}
            active={active === 'english'}
            onPress={() => {
              setActive("english");
              changeLanguage("en")
              setShowLanguageDrawer(!showLanguageDrawer)
            }}
          />
          <Drawer.Item
            label={message("kannada")}
            active={active === 'kannada'}
            onPress={() => {
              setActive("kannada");
              changeLanguage("kn")
              setShowLanguageDrawer(!showLanguageDrawer)
            }}
          />
          <Drawer.Item
            label={message("hindi")}
            active={active === 'hindi'}
            onPress={() => {
              setActive("hindi");
              changeLanguage("hn")
              setShowLanguageDrawer(!showLanguageDrawer)
            }}
          />
          <Drawer.Item
            label={message("french")}
            active={active === 'french'}
            onPress={() => {
              setActive("french");
              changeLanguage("fr")
              setShowLanguageDrawer(!showLanguageDrawer)
            }}
          />
          <Drawer.Item
            label={message("spanish")}
            active={active === 'spanish'}
            onPress={() => {
              setActive("spanish");
              changeLanguage("es")
              setShowLanguageDrawer(!showLanguageDrawer)
            }}
          />
        </Drawer.Section>
      </View>}
    </View>
  )
}

export default LanguageSwitcher

const styles = StyleSheet.create({
  globeIconContainer: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 16,
    display: "flex",
    alignItems: "flex-end"
  },
  drawerContainer: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: colors.secondary,
    width: '80%',
    height: Dimensions.get('window').height,
  },
  drawerTitle: {
    fontSize: 16
  }
})