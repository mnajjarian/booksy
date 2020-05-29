import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {NavigationComponent} from '../navigation';

const HomeScreen: NavigationComponent = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.root}>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
};

HomeScreen.options = () => ({
  topBar: {
    searchBar: true,
    searchBarPlaceholder: 'Search...',
    title: {
      text: 'Booksy',
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
export default HomeScreen;
