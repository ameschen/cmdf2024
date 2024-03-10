import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const DogDetailsForm = (props) => {
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
  const [dogGender, setDogGender] = useState('');
  const [dogLikes, setDogLikes] = useState('');
  const [dogDislikes, setDogDislikes] = useState('');

  // const [isLoading, setIsLoading] = useState(false);
  // const [submitForm, setSubmitForm] = useState(null);

  const handleSubmit = async () => {
    alert('Loading...');

    const formData = {
      DogColor: dogColor,
      DogBreed: dogBreed,
      DogFeatures: dogFeatures,
      DogFur: dogFur,
      DogEyeColor: dogEyeColor,
      DogEarColor: dogEarColor,
      DogSnoutColor: dogSnoutColor,
      // Email: email,
      DogName: dogName,
      DogBirthday: dogBirthday,
      DogGender: dogGender,
      DogLikes: dogLikes,
      DogDislikes: dogDislikes
    };

    console.log(formData); // See what will be sent

    try {
      console.log("in try");
      fetch('http://206.12.40.175:3001/create-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("in in first then");
          // console.log(data.base64Image);
          props.navigation.navigate('MapLocation', { base64ImageData: data.base64Image });
        })
        .catch(error => {
          alert(error);
          alert('catch error');
        })
    } catch (error) {
      console.error(error); // Handle any errors here
      alert('Failed to submit form');
    } 
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
      {/* {isLoading ? ( // Show loading indicator if isLoading is true
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        ) : ( */}
        <View style={styles.container}>
          <Image
            source={require('../logoNew.png')} // Replace with the path to your image
            style={styles.topImage}
            resizeMode="contain" // This will ensure the image scales to fit while maintaining its aspect ratio
          />

          <Text style={styles.subheading}>Profile Creation</Text>
          {/* <Text style={styles.label}>What is your email?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address" // To show email input suggestions on the keyboard
            autoCapitalize="none" // To ensure email addresses are entered in lowercase
          /> */}

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
            placeholder="YYYYMMDD" // Example placeholder for format
            keyboardType="numeric" // To show numeric keyboard
          />

          <Text style={styles.label}>What is your pup's gender?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogGender}
            value={dogGender}
          />

          <Text style={styles.label}>What are your pup's likes?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogLikes}
            value={dogLikes}
          />

          <Text style={styles.label}>What are your pup's dislikes?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDogDislikes}
            value={dogDislikes}
          />    

          <Text style={styles.subheading}>Pup Creation</Text>

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

            <View>
              <TouchableOpacity onPress={handleSubmit} style={styles.customButton}>
                <Text style={styles.customButtonText}>Submit</Text>
              </TouchableOpacity>
              {/* <Button style={styles.button} title="Press Me" onPress={handleSubmit} /> */}
            </View>

          </View>
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginTop: 30,
    marginBottom: 0, // Add space above the image if needed
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
    backgroundColor: '#CCD3CA', // Ensure there's no excessive padding or margin here
    height: '100%',
  },
  iconStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 20,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    fontFamily: 'System',
    color: "#3D4C36",
    fontWeight: 'bold',
  },
  // buttonContainer: {
  //   borderRadius: 20, // Rounded corners
  //   overflow: 'hidden', // This is needed to apply the border radius
  // },
  // button: {
  //   // paddingVertical: 10,
  //   // paddingHorizontal: 20,
  //   // borderRadius: 20, // This should match the buttonContainer's borderRadius
  //   // alignItems: 'center', // Center text horizontally
  //   // justifyContent: 'center', // Center text vertically
  //   backgroundColor: "#fff"
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  subheading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: "#3D4C36"
  },
  customButton: {
    marginTop: 20, // Add some margin to the top
    backgroundColor: '#3D4C36', // A nice salmon background color
    paddingVertical: 15, // Padding inside the button
    paddingHorizontal: 30, // Horizontal padding for wider button appearance
    borderRadius: 20, // Rounded corners
    width: '100%', // Set width relative to container
    alignSelf: 'center', // Center button horizontally
    marginBottom: 30,
  },
  customButtonText: {
    color: '#CCD3CA', // White text color
    textAlign: 'center', // Center text
    fontWeight: 'bold', // Bold text
    fontSize: 16, // Font size
  },
});

export default DogDetailsForm;
