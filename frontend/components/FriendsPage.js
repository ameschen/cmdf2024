import * as React from 'react';
import Friends from "./Friends";
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';


const mockDogs = [
    {
        id: 1,
        image: 'billie',
        name: 'Billie Jean',
        breed: 'Bernadoodle',
        age: 3,
        gender: 'Female',
    },
    {
        id: 2,
        image: 'stormy',
        name: 'Stormy',
        breed: 'Bernadoodle',
        age: 2,
        gender: 'Female',
    },
    {
        id: 3,
        image: 'rosie',
        name: 'Rosie',
        breed: 'Poodle',
        age: 6,
        gender: 'Female',
    },
    {
        id: 4,
        image: 'pepper',
        name: 'Pepper',
        breed: 'Italian Greyhound',
        age: 0,
        gender: 'Female',
    },
];

export default function FriendsPage() {


    return (
        <View style={styles.appContainer}>
            <Text style={styles.text}>Friends</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {mockDogs.map((dog) => (
                    <Friends
                        key={dog.id}
                        name={dog.name}
                        image={dog.image}
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

