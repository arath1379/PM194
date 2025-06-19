/* Zona 1 : Importaciones */
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Switch} from 'react-native';
import React, { useState } from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizartexto = () => {setContenido('Estado actualizado del text')};
  return (
    <View Style={{margin: 10}}>
     <Text Style={[style.text, style]}>{contenido}</Text>
     <Button title='actualizartexto' onPress={actualizartexto}color="orange" />
     </View>
  );
}

/* Zona 2 : Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.yellow} />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3 : Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color:'black',
    fontSize:27,
  },
  red:{backgroundColor:'red'},
  green:{backgroundColor:'green'},
  yellow:{backgroundColor:'yellow'},
});