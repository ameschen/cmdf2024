import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FriendsPage from './components/FriendsPage';

import DogDetailsForm from './components/DogDetailsForm';

import MapLocation from './components/MapLocation';
import Profile from './components/Profile';
import Test from './components/test';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // <Test></Test>
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MapLocation">
        <Stack.Screen name="DogDetailsForm" component={DogDetailsForm} options={{ headerShown: false }} />
        <Stack.Screen name="MapLocation" component={MapLocation} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="FriendsPage" component={FriendsPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
