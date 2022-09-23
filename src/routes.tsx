
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import Configuration from './screens/Configuration';
import Login from './screens/Login';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();
const LoginTab = createBottomTabNavigator()

export function AuthenticatedNavigation() {

  return (
    <>
      <Drawer.Navigator initialRouteName='Login' screenOptions={{ swipeEnabled: false }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Configuration" component={Configuration} />
        <LoginTab.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </>
  );
}

export function RootNavigation() {
  
  const session = useSelector((state: any) => state.session.authenticated)

  const chooseNavigation = () => {
    return (
      <>
        <AuthenticatedNavigation/>
      </>
    )
  }

  return(
    <NavigationContainer>
      {chooseNavigation()}
    </NavigationContainer>
  )
}