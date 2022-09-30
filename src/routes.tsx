import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// screens
import Home from './screens/Home';
import Configuration from './screens/Configuration';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Menu from './screens/Menu';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

Icon.loadFont()

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NavigationTabs = () => {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen 
          name='Configuration'
          component={Configuration}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="gears" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Menu'
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bars" color={color} size={size} />
            )
          }}  
        />
      </Tab.Navigator>
    </>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Sign Up' component={SignUp}/>
    </Stack.Navigator>
  )
}

export const RootNavigation = () => {

  const session = useSelector(
    function(state: any) {
      return state.authenticated
    }
  )

  return(
    <NavigationContainer>
      {session ? <NavigationTabs/> : <AuthStack/>}
    </NavigationContainer>
  )
}