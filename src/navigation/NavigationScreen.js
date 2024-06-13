import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomStack from './BottomStack'
import AnnonceDetail from '../screens/AnnonceDetail/AnnonceDetail'
import StudentClubScreen from '../screens/StudentClubScreen/StudentClubScreen'
import EditClubProfileScreen from '../screens/EditClubProfilScreen/EditClubProfilScreen'
import SettingsScreen from '../screens/SettingScreen/SettingScreen'
import EditProfileScreen from '../screens/EditClubProfilScreen/EditClubProfilScreen'

const Stack = createStackNavigator()

const NavigationScreen = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomStack} options={{headerShown:false}}/>
      <Stack.Screen name='studentClubs' component={StudentClubScreen}/>
      <Stack.Screen name ='AnnonceDetail' component={AnnonceDetail}/>
      <Stack.Screen name="Setting" component={SettingsScreen} options={{headerShown:false}}/>
      <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default NavigationScreen

