import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const images = {
    billie: require('./billie.png'),
    stormy: require('./stormy.png'),
    rosie: require('./rosie.png'),
    pepper: require('./pepper.png')
    // Add more mappings here
};

export default function Friends(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.name)}>
            <View style={styles.container}>
                <Image
                    source={images[props.image]}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Keeps items side by side
        padding: 10,
        backgroundColor: '#EED3D9',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center', // Centers items vertically in the container
        width: '90%',
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Center text container if needed, can be adjusted based on design requirements
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4f4b42',
    },
});
