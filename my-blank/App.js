/* Zona 1 : Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Prevenir que se oculte automáticamente el splash screen
SplashScreen.preventAutoHideAsync();

// Componente Texto
const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizaTexto = () => {
    setContenido('Estado actualizado del text');
  };
  return (
    <Text style={styles.text} onPress={actualizaTexto}>
      {contenido}
    </Text>
  );
};

/* Zona 2 : Componente principal */
export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppReady(true);
      await SplashScreen.hideAsync();
    }, 2000); // Simulación de carga
  }, []);

  return (
    <ImageBackground
      source={require('./assets/upq.jpg')} // Asegúrate de tener esta imagen
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Texto />
        <Texto />
        <Texto />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

/* Zona 3 : Estilos */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // vertical
    backgroundColor: 'rgba(0,0,0,0.4)', // overlay semitransparente
  },
  text: {
    color: 'white',
    fontSize: 28,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
});
