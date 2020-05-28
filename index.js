const {Navigation} = require('react-native-navigation');
import SearchScreen from './src/screens/Search';
import HomeScreen from './src/screens/Home';
import SettingScreen from './src/screens/Setting';
import {BookDetails} from './src/screens/book';

Navigation.registerComponent('app.Booksy.HomeScreen', () => HomeScreen);
Navigation.registerComponent('app.Booksy.SearchScreen', () => SearchScreen);
Navigation.registerComponent('app.Booksy.SettingScreen', () => SettingScreen);
Navigation.registerComponent('app.Booksy.BookDetails', () => BookDetails);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'light',
      drawBehind: true,
    },
    topBar: {
      drawBehind: true,
      largeTitle: {
        visible: true,
      },
    },
    bottomTab: {
      iconColor: 'white',
      selectedIconColor: '#147EFB',
      textColor: 'white',
      selectedTextColor: '#147EFB',
    },
    bottomTabs: {
      drawBehind: true,
    },
  });
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOOKSY_BOTTOM_TABS',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'app.Booksy.HomeScreen',
                    options: {
                      topBar: {
                        searchBar: true,
                        searchBarPlaceholder: 'Search...',
                        title: {
                          text: 'Booksy',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  textColor: '#aaa',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'app.Booksy.SearchScreen',
                    options: {
                      topBar: {
                        searchBar: true,
                        searchBarPlaceholder:
                          'Look for titles, authors, ISBN...',
                        title: {
                          text: 'Search',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  textColor: '#aaa',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'app.Booksy.SettingScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Setting',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Setting',
                  textColor: '#aaa',
                },
              },
            },
          },
        ],
      },
    },
  });
});
