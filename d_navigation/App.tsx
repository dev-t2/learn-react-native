/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootDrawer } from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
};

export default memo(App);
