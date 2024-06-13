import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomStack from './BottomStack'

const Stack = createStackNavigator()

const NavigationScreen = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomStack} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default NavigationScreen

