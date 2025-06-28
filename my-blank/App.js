import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Button } from 'react-native';
import { ImageBackground } from 'react-native';

export default function App(){
const [loading, setLoading] = useState(false);
const [mensaje, setMensaje] = useState('');

const simularCarga = () => {
  setLoading(true);
  setMensaje('');
  setTimeout(() => {
    setLoading(false);
    setMensaje('Carga realizada con éxito');

  }, 6000);
}
return(
  <View style={styles.container}>
    <Text style={styles.title}>
      Carga
    </Text>
    {loading ?(
      <>
      <ActivityIndicator size={"large"} color={"#2D9CDB"} />
      <Text style={styles.subtitle}>Cargando.....</Text>
      </>
    ):(
      <>
      <Button title="Iniciar carga" onPress={simularCarga} />
      {mensaje !== '' && <Text style={styles.subtitle}>{mensaje}</Text>}
      </>
    )}
  </View>
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