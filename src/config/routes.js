//import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Character from '../screens/Character';
import Episode from '../screens/Episode';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Episode" component={Episode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
