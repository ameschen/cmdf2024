import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Marker } from "react-native-maps";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import HamburgerIcon from './HamburgerIcon';

const MapLocation = (props) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState(49.26291);
  const [long, setLong] = useState(-123.24472);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let currLat = '';
  let currLong = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // text = JSON.stringify(location);
    currLat = parseFloat(JSON.stringify(location.coords.latitude));
    // 49.26291
    currLong = parseFloat(JSON.stringify(location.coords.longitude));
    // -123.24472
  }

  React.useEffect(() => {
    setLat(currLat);
  }, []);

  React.useEffect(() => {
    setLong(currLong);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>{lat} {long}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        zoomEnabled={false}
      >
        <HamburgerIcon onPress={() => props.navigation.navigate('FriendsPage')} />
        <Marker
          coordinate={{
            latitude: lat,
            longitude: long
          }}
          image={require('./dog.png')}
          // onCalloutPress={this.markerClick}
          onPress={() => props.navigation.navigate('Profile')}
        >
        {/* <MapView.Callout tooltip style={styles.customView}>
              <View style={styles.calloutText}>
                 <Text>{marker.title}{"\n"}{marker.description}</Text>
              </View>
          </MapView.Callout> */}
          {/* <Image style={{ width: 160, height: 160 }} /> */}
          {/* <View>
            <Image
              // source="require('./dog.png')"
              src={require('./dog.png')}
            // style={styles.marker}
            />
          </View> */}
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



