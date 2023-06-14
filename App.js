import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import VehicleFormScreen from './components/VehicleFormScreen';
import VehicleListScreen from './components/VehicleListScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="VehicleForm" component={VehicleFormScreen} />
        <Tab.Screen name="VehicleList" component={VehicleListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
