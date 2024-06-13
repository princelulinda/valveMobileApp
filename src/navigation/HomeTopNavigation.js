import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Annonce from '../component/Annonce';
import Letteer from '../component/Letteer';
import Table from '../component/Table';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Annonce"
      screenOptions={{
        tabBarActiveTintColor: PRIMARYCOLOR,
        tabBarLabelStyle: { fontSize: 12, backgroundColor:"#ddd", paddingHorizontal:15,paddingVertical:5, borderRadius:20 },
        tabBarStyle: { backgroundColor: 'none',  },
      }}
    >
      <Tab.Screen
        name="Annonce"
        component={Annonce}
        options={{ tabBarLabel: 'Annonce' }}
      />
      <Tab.Screen
        name="Document"
        component={Letteer}
        options={{ tabBarLabel: 'Documents' }}
      />
      <Tab.Screen
        name="Table"
        component={Table}
        options={{ tabBarLabel: 'Liste' }}
      />
    </Tab.Navigator>
  );
}