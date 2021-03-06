import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationComponent} from '../navigation';

const SettingScreen: NavigationComponent = () => {
  return (
    <View style={styles.root}>
      <Text>Setting Screen</Text>
    </View>
  );
};

SettingScreen.options = () => ({
  topBar: {
    title: {
      text: 'Setting',
    },
  },
});

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
export default SettingScreen;
