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
  const [email, setEmail] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogBirthday, setDogBirthday] = useState('');
  const [dogSex, setDogSex] = useState('');

  const handleSubmit = () => {
    // Implement what happens when the form is submitted
    console.log(dogColor, dogBreed, dogFeatures, dogFur, dogEyeColor, dogEarColor, dogSnoutColor, email, dogName, dogBirthday, dogSex);
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
    colors={['#FAFAFA', '#FAFAFA']} // These are light brownish/golden colors
    style={styles.gradientBackground}
  >
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
    <Image
            source={require('../logo.png')} // Replace with the path to your image
            style={styles.topImage}
            resizeMode="contain" // This will ensure the image scales to fit while maintaining its aspect ratio
      />
      <Text style={styles.label}>What is your email?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address" // To show email input suggestions on the keyboard
            autoCapitalize="none" // To ensure email addresses are entered in lowercase
          />

          <Text style={styles.label}>What is your pup's name?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogName}
            value={dogName}
          />

          <Text style={styles.label}>What is your pup's birthday?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogBirthday}
            value={dogBirthday}
            placeholder="YYYY-MM-DD" // Example placeholder for format
            keyboardType="numeric" // To show numeric keyboard
          />

          <Text style={styles.label}>What is your pup's sex?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogSex}
            value={dogSex}
            autoCapitalize="none" // To prevent automatic capitalization
          />

      <Text style={styles.customIconText}>Let's create a custom icon for your companion...</Text>
      <Image
       source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce8b1e76965389.5c7945b0cffef.gif' }} // Direct URI to the image
       style={styles.bottomImage}
       resizeMode="contain"
      />

      
      <Text style={styles.label}>Describe your pup's color(s):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogColor}
        value={dogColor}
      />
      
      <Text style={styles.label}>What breed is your pup?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogBreed}
        value={dogBreed}
      />

      <Text style={styles.label}>Describe your pup's type of fur:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogFur}
        value={dogFur}
      />
      
      
      <Text style={styles.label}>What is your pup's eye color?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogEyeColor}
        value={dogEyeColor}
      />
      <Text style={styles.label}>What color are your pup's ears?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogEarColor}
        value={dogEarColor}
      />

      <Text style={styles.label}>What is your pup's snout color?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogSnoutColor}
        value={dogSnoutColor}
      />

      <Text style={styles.label}>Explain any notable features your pup has:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDogFeatures}
        value={dogFeatures}
      />
     
     <View style={styles.buttonImageContainer}>
      
      <GradientButton
        title="Submit"
       onPress={handleSubmit}
      />
      <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987477.png' }} // Replace with the path to your image
              style={styles.buttonImage}
              resizeMode="contain" // or "cover", depending on your need
            />
      </View>
    </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

  buttonImage: {
    width: 50, // Set the width of the image
    height: 50, // Set the height of the image
    marginLeft: 10, // Add some margin if needed
  },

buttonImageContainer: {
  flexDirection: 'row', // Align children in a row
  alignItems: 'center', // Center children vertically in the container
  justifyContent: 'space-evenly', // Distribute children evenly
},
  bottomImage: {
    width: '75%', // Takes the full width of the container
    height: 150, // Set the height as desired
    marginTop: 0,
    marginBottom: 0, // Add space above the image if needed
  },
  topImage: {
    width: '70%', // Takes the full width of the container
    height: 130, // Set the height as desired
    marginTop: 10,
    marginBottom: 10, // Add space above the image if needed
  },
  customIconText: {
    marginTop: 20,
    marginBottom: 0, // or any other value for spacing
    fontSize: 14,
    color: '#FF8C00', // or any other color you prefer
    textAlign: 'center', // if you want to center the text
    fontWeight: 'bold',
  },
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
    backgroundColor: 'white',
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
