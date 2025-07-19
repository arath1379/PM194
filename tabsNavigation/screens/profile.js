import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import IonIcons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) { 
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <IonIcons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>
      </View>

      {/* Aquí agregamos el botón que navegará a la pantalla Detalle */}
      <TouchableOpacity
        style={styles.detailsButton} 
        onPress={() => navigation.navigate('Detalle')} // 
      >
        <Text style={styles.buttonText}>Detalles de Usuario</Text> {/* Define este estilo */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  detailsButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue', 
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});