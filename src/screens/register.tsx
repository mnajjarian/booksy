import React from 'react';
import {Routes} from './routes';
import {NavigationComponent} from '../navigation';
import HomeScreen from './Home';
import SearchScreen from './Search';
import {BookDetails} from './book';
import SettingScreen from './Setting';
import {Navigation} from 'react-native-navigation';
import {AppearanceProvider} from 'react-native-appearance';

const map = new Map<Routes, NavigationComponent<any>>();

map.set(Routes.HomeScreen, HomeScreen);
map.set(Routes.SearchScreen, SearchScreen);
map.set(Routes.BookDetails, BookDetails);
map.set(Routes.SettingScreen, SettingScreen);

export const registerScreen = () => {
  map.forEach((ScreenComponent, route) => {
    Navigation.registerComponent(
      route,
      () => (props) => (
        <AppearanceProvider>
          <ScreenComponent {...props} />
        </AppearanceProvider>
      ),
      () => ScreenComponent,
    );
  });
};
