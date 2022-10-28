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
import {GlobalStyle} from './src/styles/GlobalStyle';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

library.add(fab, fas, far);

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={GlobalStyle.container}
        edges={['top', 'left', 'right', 'bottom']}>
        <CitySelection />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
