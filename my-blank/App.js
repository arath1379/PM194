/* Zona 1 : Importaciones */
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizaTexto = () => {
    setContenido('Estado actualizado del text');
  };
  return <Text onPress={actualizaTexto}>{contenido}</Text>;
};

const Titulo = () => {
  const [textoBoton, setTextoBoton] = useState('Trabaja');
  const cambiarTextoBoton = () => {
    setTextoBoton('¡Texto del botón actualizado!');
  };
  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Button title={textoBoton} onPress={cambiarTextoBoton} />
    </View>
  );
};

/* Zona 2 : Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <Titulo />
      <Texto />
      <Texto />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3 : Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
