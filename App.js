import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Cards from './app/components/Cards';
import MainScreen from './app/screens/MainScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./app/screens/MyStack"

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

