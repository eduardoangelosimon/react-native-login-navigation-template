import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import Home from './src/screens/Home';
import Configuration from './src/screens/Configuration';
import Login from './src/screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Configuration" component={Configuration} />
    </Drawer.Navigator>
  );
}

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Login/>
      </NavigationContainer>
    </>
  );
};

export default App;
