import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import SignInScreen from '../screens/Auth/Login'
import { AntDesign,Feather  } from '@expo/vector-icons';
import SendPost from '../screens/AnnonceEdit/AnnonceEdit'
import ViewAffiche from '../screens/GetStoryImage'
import CreatePostScreen from '../screens/CreatePost/CreatePost'
import StoriesNavigation from '../screens/StoriesNavigation/StoriesNavigation'

const Stack = createStackNavigator()

const NavigationScreen = () => {
  const LocalUserData = localStorage.getItem("userData")
  return (
   <NavigationContainer>
    <Stack.Navigator>
      {LocalUserData?
      <Stack.Screen name="Home" component={BottomStack} options={{headerShown:false}}/>
      :<Stack.Screen name="Login" component={SignInScreen} options={{headerShown:false}}/>
    }
      <Stack.Screen name="/" component={BottomStack} options={{headerShown:false}}/>
    <Stack.Screen name='create' component={CreatePostScreen}/>
    <Stack.Screen name='studentClubs' component={StudentClubScreen}/>
      <Stack.Screen name ='AnnonceDetail' component={AnnonceDetail}
      options={
        {
          headerRight:()=>(
            <View style={{flexDirection:"row", gap:20, paddingRight:20}}>
            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity>
               <Feather name="corner-up-right" size={24} color="#333" />
            </TouchableOpacity>
            </View>
          )
        }
      }
      />
      <Stack.Screen name="Setting" component={SettingsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="StoriesNavigation" component={StoriesNavigation} options={{headerShown:false}}/>
        <Stack.Screen name="annonceSend" component={SendPost} options={{headerShown:false}}/> 
      <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{headerShown:false}}/>
       <Stack.Screen name="View" component={ViewAffiche}
       options={{
       headerTransparent:true
       }}
       />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default NavigationScreen

// 19600150