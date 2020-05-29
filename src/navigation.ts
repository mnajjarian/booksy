import {FunctionComponent} from 'react';
import {Navigation, Options} from 'react-native-navigation';
import {Routes} from './screens/routes';

export interface NavigationComponentOptions<P> {
  options?: (passProps?: P) => Options;
}

export type NavigationComponent<P = {}> = FunctionComponent<
  P & {
    componentId: string;
  }
> &
  NavigationComponentOptions<P>;
type NavigateProps = {
  componentId: string;
  route: Routes;
  passProps: any;
};

// helpers

export const setMainAsRoot = () =>
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
                    name: Routes.HomeScreen,
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
                    name: Routes.SearchScreen,
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
                    name: Routes.SettingScreen,
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

export const setAuthAsRoot = {};
export const NavigateTo = (
  componentId: string,
  route: Routes,
  passProps: any = {},
) => {
  Navigation.push(componentId, {
    component: {
      name: route,
      passProps: passProps,
    },
  });
};
