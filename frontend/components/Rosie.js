import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import mockDogs from './Data.js'; // Assuming this is the file name where mockDogs is defined


const mockDog = mockDogs.find(dog => dog.name === "Rosie")

export default function Rosie() {
    // Split likes and dislikes into arrays
    const likesArray = mockDog.likes.split(', ');
    const dislikesArray = mockDog.dislikes.split(', ');

    return (
        <View style={styles.container}>
            <Image
                source={require('./rosie.png')}
                style={styles.image}
            />
            <Text style={styles.name}>{mockDog.name}</Text>
            <Text style={styles.breed}>{mockDog.breed}</Text>
            <Text style={styles.age}>{mockDog.age} years old</Text>
            <Text style={styles.gender}>{mockDog.gender}</Text>
            <View style={styles.prefs}>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Likes</Text>
                    {likesArray.map((like, index) => (
                        <Text key={index} style={styles.listItem}>{like}</Text>
                    ))}
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Dislikes</Text>
                    {dislikesArray.map((dislike, index) => (
                        <Text key={index} style={styles.listItem}>{dislike}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#CCD3CA',
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 80,
    },
    image: {
        width: 270,
        height: 270,
    },
    name: {
        fontSize: 47,
        fontWeight: '800',
        color: '#4f4b42',
    },
    breed: {
        marginTop: 25,
        fontSize: 30,
        color: '#4f4b42',
        fontWeight: '700',
    },
    age: {
        fontSize: 25,
        color: '#4f4b42',
        fontWeight: '700',
    },
    gender: {
        fontSize: 25,
        color: '#4f4b42',
        fontWeight: '700',
    },
    prefs: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    list: {
        flexDirection: 'column',
        backgroundColor: '#4f4b42',
        borderRadius: 10,
        padding: 10,
        width: 175,
    },
    listTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#CCD3CA',
        marginBottom: 5,
    },
    listItem: {
        fontSize: 18,
        color: '#CCD3CA',
    }
});
