import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import React from 'react';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={{headerShown:false}} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
