import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Marker } from "react-native-maps";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import HamburgerIcon from './HamburgerIcon';
import mockDogs from './Data';
import { Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

const MapLocation = (props) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [formData, setFormData] = useState(null);
  // const [lat, setLat] = useState(49.26291);
  // const [long, setLong] = useState(-123.24472);
  // console.log("MapLocation " + JSON.stringify(props.route.params));
  // console.log("MapLocation with formdata" + props.route.params.formData);

  const [coords, setCoords] = useState({
    latitude: 49.26291,
    longitude: -123.24472,
  });

  const { base64ImageData } = props.route.params;
  const [pngImageUri, setPngImageUri] = useState(null);


  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const pngUri = await saveBase64ToPNG(base64ImageData);
      setPngImageUri(pngUri);
      setCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const saveBase64ToPNG = async (base64Data) => {
    try {
      const fileUri = FileSystem.cacheDirectory + 'image.png';
      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log(fileUri)
      return fileUri;
    } catch (error) {
      console.error('Error saving base64 to PNG:', error);
      return null;
    }
  };

  let text = 'Waiting..';
  let currLat = '';
  let currLong = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    currLat = parseFloat(JSON.stringify(location.coords.latitude));
    currLong = parseFloat(JSON.stringify(location.coords.longitude));
  }

  // React.useEffect(() => {
  //   setLat(currLat);
  // }, []);

  // React.useEffect(() => {
  //   setLong(currLong);
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Text>{lat} {long}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          ...coords,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        zoomEnabled={false}
      >
        <HamburgerIcon onPress={() => props.navigation.navigate('FriendsPage')} />
        <Marker
           coordinate={{
            latitude: 49.2622,
            longitude: -123.245
          }}
          image={require('./dog.png')}
          // onCalloutPress={this.markerClick}
          onPress={() => props.navigation.navigate('Billie')}
        >
        </Marker>
        <Marker
          coordinate={{
            latitude: 49.2625,
            longitude: -123.2461
          }}
          image={require('./pepper.png')}
          // onCalloutPress={this.markerClick}
          onPress={() => props.navigation.navigate('Pepper')}
        >
        </Marker>
{/* 
        <Marker
          coordinate={{
            latitude: 49.2635,
            longitude: -123.246
          }}
          image={require('./rosie.png')}
          // onCalloutPress={this.markerClick}
          onPress={() => props.navigation.navigate('Rosie')}
        >
        </Marker>
        <Marker
          coordinate={{
            latitude: 49.2645,
            longitude: -123.245
          }}
          image={require('./stormy.png')}
          // onCalloutPress={this.markerClick}
          onPress={() => props.navigation.navigate('Stormy')}
        >
        </Marker> */}

        <Marker
          coordinate={coords}
          onPress={() => props.navigation.navigate('Profile', { image: pngImageUri, formData: props.route.params.formData })}
        >
          <Image source={{ uri: pngImageUri }} style={{ width: 100, height: 100 }} />
        </Marker>
      </MapView>
      <StatusBar style="auto" />
      {/* <MapLocation></MapLocation> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map :{
    ...StyleSheet.absoluteFillObject,
  }
});

export default MapLocation;



