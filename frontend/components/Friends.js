import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';



export default function Friends({ name, breed, age, gender, image }) {

    return (
        <View style={styles.container}>
            <Image
                source={require("./billie.png")} // Note: Dynamic require may not work as expected in React Native
                style={styles.image}
            />
            <View style={styles.details}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{breed}</Text>
                <Text style={styles.text}>{age} years</Text>
                <Text style={styles.text}>{gender}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#EED3D9',
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '95%',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    text: {
        fontSize: 18, // Adjust font size
        marginBottom: 5,
        color: '#4f4b42', // Change text color to white
        fontFamily: 'Arial', // Change font family to Arial
    },
});