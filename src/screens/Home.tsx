import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.root}>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
};

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
export default HomeScreen;
