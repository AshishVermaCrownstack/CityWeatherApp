/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CitySelection from './src/screens/CitySelection';
import {SafeAreaView} from 'react-native';
import {GlobalStyle} from './src/styles/GlobalStyle';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <CitySelection />
    </SafeAreaView>
  );
};

export default App;
