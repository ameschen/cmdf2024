import * as React from 'react';
import Friends from "./Friends";
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import mockDogs from './Data';



export default function FriendsPage({ navigation, addFriend, friendsList }) {

    // const filteredDogs = mockDogs.filter(dog => dog.name === 'Rosie' || dog.name === 'Stormy');

    return (
        <View style={styles.appContainer}>
            <Text style={styles.text}>Friends</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {friendsList.map((dog) => (
                    <Friends
                        key={dog.id}
                        name={dog.name}
                        image={dog.image}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 80,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#4f4b42',
    },
    container: {
        marginTop: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

