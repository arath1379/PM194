import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Usamos react-native-vector-icons directamente

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botón de regreso en la parte superior izquierda, similar a un encabezado de Stack */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Detalles Usuario</Text>
        <Text style={styles.subtitle}>Usando Navegación Stack</Text>
        {/* Aquí podrías añadir más detalles del usuario */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50, // Espacio para el botón de regreso en la parte superior
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute', // Posiciona el botón de regreso
    top: 20,
    left: 20,
    zIndex: 1, // Asegura que el botón esté por encima de otros elementos
    padding: 10,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});