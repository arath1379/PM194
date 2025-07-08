import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SectionList,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CATEGORIAS = ['Ficción', 'Historia', 'Tecnología'];

function MainApp() {
  const insets = useSafeAreaInsets();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Ficción');
  const [librosPorAutor, setLibrosPorAutor] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [libroExpandidoId, setLibroExpandidoId] = useState(null);

  const obtenerLibros = async (categoria) => {
    try {
      setCargando(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${categoria}&maxResults=30`
      );

      const items = response.data.items || [];
      const agrupadosPorAutor = {};

      items.forEach((item) => {
        const autor = item.volumeInfo.authors?.[0] || 'Autor desconocido';
        if (!agrupadosPorAutor[autor]) agrupadosPorAutor[autor] = [];
        agrupadosPorAutor[autor].push(item);
      });

      const agrupados = Object.keys(agrupadosPorAutor).map((autor) => ({
        title: autor,
        data: agrupadosPorAutor[autor],
      }));

      setLibrosPorAutor(agrupados);
    } catch (error) {
      Alert.alert('Error', 'No se pudo cargar la información de los libros.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerLibros(categoriaSeleccionada);
  }, [categoriaSeleccionada]);

  const renderLibro = ({ item }) => {
    const { title, description, imageLinks, publisher, publishedDate, pageCount } = item.volumeInfo;
    const imagen = imageLinks?.thumbnail;
    const isExpanded = libroExpandidoId === item.id;

    const descripcionCorta = description
      ? `${description.substring(0, 120)}${description.length > 120 ? '...' : ''}`
      : 'Descripción no disponible';

    const descripcionCompleta = description || 'Descripción no disponible';

    return (
      <TouchableOpacity
        style={estilos.libroContainer}
        onPress={() =>
          setLibroExpandidoId(isExpanded ? null : item.id)
        }
      >
        {imagen && <Image source={{ uri: imagen }} style={estilos.libroImagen} />}
        <View style={estilos.libroTexto}>
          <Text style={estilos.libroTitulo}>{title}</Text>
          <Text style={estilos.libroEditorial}>{publisher || 'Editorial no especificada'}</Text>
          <Text style={estilos.libroDescripcion}>
            {isExpanded ? descripcionCompleta : descripcionCorta}
          </Text>

          {isExpanded && (
            <View style={{ marginTop: 8 }}>
              <Text style={estilos.infoExtra}>Publicado: {publishedDate || 'N/D'}</Text>
              <Text style={estilos.infoExtra}>Páginas: {pageCount || 'N/D'}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[estilos.contenedor, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={estilos.header}>
        <Text style={estilos.tituloApp}>Explorador de Libros</Text>
        <Text style={estilos.subtitulo}>Categoría: {categoriaSeleccionada}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.categoriasContainer}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[estilos.botonCategoria, categoriaSeleccionada === cat && estilos.botonActivo]}
            onPress={() => setCategoriaSeleccionada(cat)}
          >
            <Text style={[estilos.textoCategoria, categoriaSeleccionada === cat && estilos.textoActivo]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {cargando ? (
        <View style={estilos.cargandoContainer}>
          <ActivityIndicator size="large" color="#8A2BE2" />
        </View>
      ) : librosPorAutor.length === 0 ? (
        <View style={estilos.sinLibrosContainer}>
          <Text style={estilos.mensajeError}>No se encontraron libros</Text>
        </View>
      ) : (
        <SectionList
          sections={librosPorAutor}
          keyExtractor={(item) => item.id}
          renderItem={renderLibro}
          renderSectionHeader={({ section: { title } }) => (
            <View style={estilos.autorHeader}>
              <Text style={estilos.autorNombre}>{title}</Text>
            </View>
          )}
          contentContainerStyle={estilos.listaContenido}
        />
      )}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 15,
  },
  tituloApp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666666',
  },
  categoriasContainer: {
    marginBottom: 20,
    height: 50,
  },
  botonCategoria: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F0F0F0',
  },
  botonActivo: {
    backgroundColor: '#8A2BE2',
  },
  textoCategoria: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
  },
  textoActivo: {
    color: '#FFFFFF',
  },
  cargandoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sinLibrosContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mensajeError: {
    fontSize: 16,
    color: '#888888',
  },
  listaContenido: {
    paddingBottom: 30,
  },
  autorHeader: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 4,
  },
  autorNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  libroContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  libroImagen: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 12,
  },
  libroTexto: {
    flex: 1,
    justifyContent: 'center',
  },
  libroTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 4,
  },
  libroEditorial: {
    fontSize: 14,
    color: '#777777',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  libroDescripcion: {
    fontSize: 14,
    color: '#444444',
    lineHeight: 20,
  },
  infoExtra: {
    fontSize: 13,
    color: '#666',
  },
});
