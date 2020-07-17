import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './pages/Login'
import Ponto from './pages/Ponto'
export default function Routes(){
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={ Login } options={ {
          title: 'Login',
          headerStyle: {
            backgroundColor: '#fafafa',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        } }/>
        <Stack.Screen name="Ponto" component={ Ponto }/>
    </Stack.Navigator>
    
  )
}