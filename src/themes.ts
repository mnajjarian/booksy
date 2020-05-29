import {useColorScheme} from 'react-native-appearance';
import {registerThemes} from 'react-native-themed-styles';

const light = {backgroundColor: 'white', textColor: 'black'};
const dark = {backgroundColor: 'black', textColor: 'white'};

const styleSheetFactory = registerThemes({light, dark}, () => {
  const colorSchema = useColorScheme() as 'light' | 'dark';
  return ['light', 'dark'].indexOf(colorSchema) !== -1 ? colorSchema : 'light';
});

export {styleSheetFactory};
