import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import ReceptionScreen from '../screens/Reception/Reception';
import ProfileScreen from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:BLACKCOLOR,
        tabBarStyle:{backgroundColor:BLACKCOLOR}
      }}
    
    >
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
       <Tab.Screen
        name="Boite de Reception"
        component={ReceptionScreen}
        options={{
          tabBarLabel: 'Reception',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
         <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      
    </Tab.Navigator>
  );
}