import * as React from 'react';
import Friends from "./Friends";
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const mockDogs = [
    {
        id: 1,
        image: './billie.png',
        name: 'Billie Jean',
        breed: 'Bernadoodle',
        age: 3,
        gender: 'Female',
    },
    {
        id: 2,
        image: './stormy.png',
        name: 'Stormy',
        breed: 'Bernadoodle',
        age: 2,
        gender: 'Female',
    },
    {
        id: 3,
        image: './rosie.png',
        name: 'Rosie',
        breed: 'Poodle',
        age: 6,
        gender: 'Female',
    },
    {
        id: 4,
        image: './pepper.png',
        name: 'Pepper',
        breed: 'Italian Greyhound',
        age: 0,
        gender: 'Female',
    },
];

export default function FriendsPage() {
    return (
        <View style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                {mockDogs.map((dog) => (
                    <Friends
                        key={dog.id}
                        name={dog.name}
                        breed={dog.breed}
                        age={dog.age}
                        gender={dog.gender}
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    container: {
        marginTop: 70,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

