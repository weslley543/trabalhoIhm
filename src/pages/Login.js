import React, { useState } from 'react'
import {
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import logo from '../../assets/img/logo.png'
export default function Login({ navigation }) {
  const [cpfValue, setCpfValue] = useState('');

  const handleNavigate = ()=>{
    navigation.navigate('Ponto')
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS}
      style={styles.container}
    >
      <Image source={logo} style={styles.image}/>
      <Text style={styles.label}>CPF</Text>
      <TextInput value={cpfValue} onChangeText={setCpfValue} style={styles.input} />
      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor: '#fafafa'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,

  },
  input: {
    borderWidth: 1,
    borderBottomColor: '#33691e',
    paddingHorizontal: 20,
    fontSize: 16,
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  textButton: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    height: 150,
    resizeMode: "contain",
    alignSelf: 'center'
  },
})