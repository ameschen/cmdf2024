import axios from 'axios';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Test = () => {

  React.useEffect(async() => {
    try {
      console.log("calling api");
      const response = await axios.post('http://10.0.2.2:3001/create-profile');
      console.log("done calling api");
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error); // Handle any errors here
      alert('Failed to submit form');
    }
  }, []);

  return (
    <View>
      <Text>hi</Text>
    </View>
  )
}

export default Test;