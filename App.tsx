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
// import CitySelection from './src/screens/CitySelection';
import {GlobalStyle} from './src/styles/GlobalStyle';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Weather from './src/screens/Weather';
import CitySelection from './src/screens/CitySelection';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Route} from './src/utils/Constants';

library.add(fab, fas, far);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={GlobalStyle.container}
        edges={['top', 'left', 'right', 'bottom']}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Route.Weather}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={Route.Weather} component={Weather} />
            <Stack.Screen
              name={Route.CitySelection}
              component={CitySelection}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
