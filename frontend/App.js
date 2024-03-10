import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FriendsPage from './components/FriendsPage';

import DogDetailsForm from './components/DogDetailsForm';

import MapLocation from './components/MapLocation';
import Profile from './components/Profile';
import Rosie from './components/Rosie';
import Stormy from './components/Stormy';
import Pepper from './components/Pepper';
import Billie from './components/Billie';
import mockDogs from './components/Data';

const Stack = createNativeStackNavigator();

export default function App() {

  const [friendsList, setFriendsList] = React.useState([mockDogs[1], mockDogs[2]]);

  // Function to add a new friend
  const addFriend = (newFriend) => {
    if (!friendsList.some(friend => friend.id === newFriend.id)) {
      setFriendsList([...friendsList, newFriend]);
    }
  };

  return (
    // <Test></Test>
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MapLocation">
        <Stack.Screen name="DogDetailsForm" component={DogDetailsForm} options={{ headerShown: false }} />
        <Stack.Screen name="MapLocation" component={MapLocation} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Rosie" component={Rosie} options={{ headerShown: false }} />
        <Stack.Screen name="Stormy" component={Stormy} options={{ headerShown: false }} />


        {/* <Stack.Screen name="Pepper" component={Pepper} options={{ headerShown: false }} /> */}

        <Stack.Screen
          name="Pepper"
          options={{ headerShown: false }}
        >
          {props => <Pepper {...props} addFriend={addFriend} />}
        </Stack.Screen>

        <Stack.Screen
          name="Billie"
          options={{ headerShown: false }}
        >
          {props => <Billie {...props} addFriend={addFriend} />}
        </Stack.Screen>


        <Stack.Screen
          name="FriendsPage"
          options={{ headerShown: false }}
        >
          {props => <FriendsPage {...props} addFriend={addFriend} friendsList={friendsList} />}
        </Stack.Screen>


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
