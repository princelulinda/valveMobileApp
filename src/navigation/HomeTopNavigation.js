import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Annonce from '../component/Annonce';
import Letteer from '../component/Letteer';
import Table from '../component/Table';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../assets/Constant/COLOR';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Annonce"
      screenOptions={{
        tabBarActiveTintColor: BLACKCOLOR,
        tabBarLabelStyle: { fontSize: 12, paddingHorizontal:15,paddingVertical:5, borderRadius:20 },
        tabBarStyle: { backgroundColor:"#ddd", },
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