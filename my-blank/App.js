/* Zona 1 : Importaciones */
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Switch} from 'react-native';
import React, { useState } from 'react';

const Interruptor = ()=>{
  const [isEnable, setIsEnable] = useState(false);
  const togleSwitch = ()=> setIsEnable(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isEnable ? 'Activado' : 'Desactivado'}
      </Text>
      <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={togleSwitch}
      value={isEnable}
      />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 2 : Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Interruptor />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3 : Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color:'black',
    fontSize:27,
  },
});