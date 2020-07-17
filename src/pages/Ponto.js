import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function Ponto() {
  const [ownLocation, setOwnLocation] = useState({
    latitude: -22.130723,
    longitude: -51.398810,
    latitudeDelta: 0.0142,
    longitudeDelta: 0.0231
  });
  const [tipoPonto, setTipoPonto] = useState('Ponto de Entrada')
  useEffect(()=>{
    renderPontos()
  },[renderPontos])
  const pontos = [];
  const handleBaterPonto = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let PermissionResultCamera = await ImagePicker.requestCameraPermissionsAsync({
      allowsEditing: true,
      aspect: [4, 5]
      , allowsMultipleSelection: true,

    }, Permissions.LOCATION)

    if (PermissionResultCamera.granted === false) {
      alert('Eu preciso da sua permissão para continuar');
    }
    let pickerResult = await ImagePicker.launchCameraAsync();
    if (!pickerResult.cancelled) {
      photo = pickerResult;

    }
    const location  = await Location.getCurrentPositionAsync({});

    const {latitude, longitude} = location.coords;
    pontos.push({latitude, longitude});
    if(tipoPonto==='Ponto de Entrada'){
      setTipoPonto('Ponto de Saida')
    }

    Alert.alert('Atenção !!', `${tipoPonto} registrado com sucesso`);
  }

  const renderPontos = ()=>{
    pontos.map((ponto, index) => {
      <Marker key={index} coordinate={{
         latitude: ponto.latitude,
         longitude: ponto.longitude
       }} />
    })
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        showsMyLocationButton={true}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={ownLocation}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}

      >
        {
         renderPontos()
        }
      </MapView>
      <View style={styles.place}>
      <Text>{tipoPonto}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleBaterPonto} style={styles.button}>
            <Text style={{ color: '#fafafa' }}>
              Bater Ponto
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  place: {
    width: width - 40,
    maxHeight: 400,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'flex-start'

  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
    padding: 10,
    backgroundColor: '#4286f4',
    width: width - 70,
    height: 35
  }
})