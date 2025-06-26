import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, ImageBackground, TextInput, Alert, ScrollView, Button} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [appLista, setAppLista] = useState([false]);
  const [AcepTerminos, setAcepTerminos] = useState(false);

  const mostrarAlert = () => {
    if (nombre === '' || correo === '') {
      Alert.alert('Error', 'Por favor, rellene todos los campos.');
      return;
    }
    if (AcepTerminos === false) {
      Alert.alert('Terminos y condiciones', 'Por favor, acepte los terminos y condiciones.');
      return;
    }
    Alert.alert('¡Bienvenido!', `Hola ${nombre}! Tu correo es ${correo}`);
  };

  useEffect(() => {
    setTimeout(async () => {
      setAppLista(true);
      await SplashScreen.hideAsync();
    }, 1000);
  },
  []);

  return (
    
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background} resizeMode="cover">
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
      />
      <Switch
        style={styles.switch}
        value={AcepTerminos}
        onValueChange={setAcepTerminos}
      />
      <Text style={styles.title}>Terminos y condiciones</Text>
    <Button title="Registrarse" onPress={mostrarAlert} />
    </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});