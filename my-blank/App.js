import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';

export default function App(){

return(
  <ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false} horizontal={true}>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text>
  <Text>Hola Mundo</Text><Text>Hola Mundo</Text>

  </ScrollView>
)

}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // overlay semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});