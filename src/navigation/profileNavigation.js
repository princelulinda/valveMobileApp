import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClubPublication from '../component/ClubPublication';
import ClubMembers from '../component/ClubMembers';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';


const Tab = createMaterialTopTabNavigator();

export default function ProfileNavigation() {
  return (
    <Tab.Navigator
    initialRouteName="Annonce"
    screenOptions={{
      tabBarActiveTintColor: PRIMARYCOLOR,
      tabBarLabelStyle: { fontSize: 12, paddingHorizontal:15,paddingVertical:5, borderRadius:20 },
      tabBarStyle: { backgroundColor:"transparent",  },
    }}
  >
    <Tab.Screen
      name="Publication"
      component={ClubPublication}
      options={{ tabBarLabel: 'Publication' }}
    />
    <Tab.Screen
      name="Clubmembers"
      component={ClubMembers}
      options={{ tabBarLabel: 'Club Members' }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})