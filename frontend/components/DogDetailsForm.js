import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const DogDetailsForm = () => {
  const [dogColor, setDogColor] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogFeatures, setDogFeatures] = useState('');
  const [dogFur, setDogFur] = useState('');
  const [dogEyeColor, setDogEyeColor] = useState('');
  const [dogEarColor, setDogEarColor] = useState('');
  const [dogSnoutColor, setDogSnoutColor] = useState('');

  const handleSubmit = () => {
    // Implement what happens when the form is submitted
    console.log(dogColor, dogBreed, dogFeatures, dogFur, dogEyeColor, dogEarColor, dogSnoutColor);
    alert('Form Submitted');
  };

  const GradientButton = ({ onPress, title }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#FFA500', '#FF7F00']} // This is an orange gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
    // Background Linear Gradient
    colors={['#fffff', '#fffff']} // These are light brownish/golden colors
    style={styles.gradientBackground}
  >
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png' }} 
        style={styles.iconStyle} 
      />
      <Text style={styles.label}>Describe your dog's color(s):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogColor}
        value={dogColor}
      />
      
      <Text style={styles.label}>What breed is your dog?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogBreed}
        value={dogBreed}
      />

      <Text style={styles.label}>Describe your dog's type of fur</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogFur}
        value={dogFur}
      />

      <Text style={styles.label}>What is your dog's eye color?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogEyeColor}
        value={dogEyeColor}
      />
      <Text style={styles.label}>What color are your dog's ears?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogEarColor}
        value={dogEarColor}
      />

      <Text style={styles.label}>What is your dog's snout color?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogSnoutColor}
        value={dogSnoutColor}
      />

      <Text style={styles.label}>Explain any notable features your dog has:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogFeatures}
        value={dogFeatures}
      />

      <GradientButton
        title="Submit"
       onPress={handleSubmit}
      />
    </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    fontFamily: 'System',
  },
  buttonContainer: {
    borderRadius: 20, // Rounded corners
    overflow: 'hidden', // This is needed to apply the border radius
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // This should match the buttonContainer's borderRadius
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default DogDetailsForm;
