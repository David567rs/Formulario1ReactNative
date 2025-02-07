import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* 🔹 Encabezado fijo arriba */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.logo}>InSh◉t</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="notifications" size={24} color="#4B2E1E" />
            <Ionicons name="settings" size={24} color="#4B2E1E" />
          </View>
        </View>
      </View>

      {/* 🔹 Contenido principal (más abajo) */}
      <View style={styles.mainContent}>
        {/* Crear Nuevo */}
        <Text style={styles.sectionTitle}>CREAR NUEVO</Text>
        <View style={styles.createContainer}>
          <TouchableOpacity style={styles.createButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/777/777242.png' }} style={styles.createImage} />
            <Text style={styles.createText}>Vídeo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2561/2561106.png' }} style={styles.createImage} />
            <Text style={styles.createText}>Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8718/8718650.png' }} style={styles.createImage} />
            <Text style={styles.createText}>Collage</Text>
          </TouchableOpacity>
        </View>

        {/* Materiales */}
        <View style={styles.materialHeader}>
          <Text style={styles.sectionTitle}>MATERIALES</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>VER TODO {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.materialContainer}>
          {/* Primer contenedor */}
          <TouchableOpacity style={[styles.materialBox, { backgroundColor: '#003366' }]}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4927/4927537.png' }} style={styles.materialImage} />
            <Text style={[styles.materialText, { color: 'yellow' }]}>CELEBRAR</Text>
          </TouchableOpacity>

          {/* Segundo contenedor */}
          <TouchableOpacity style={[styles.materialBox, { backgroundColor: '#A8B19D' }]}>
            <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20241021/original/pngtree-cute-watercolor-panda-bear-holding-bamboo-clipart-illustration-png-image_16443073.png' }} style={styles.materialImage} />
            <Text style={[styles.materialText, { color: 'grey' }]}>PANDA</Text>
          </TouchableOpacity>

          {/* Tercer contenedor */}
          <TouchableOpacity style={[styles.materialBox, { backgroundColor: '#F8D9B8' }]}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616653.png' }} style={styles.materialImage} />
            <Text style={[styles.materialText, { color: 'green' }]}>BENDICIÓN SERPIENTE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF867F',
    paddingHorizontal: 30,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF867F',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    zIndex: 10, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B2E1E',
  },
  mainContent: {
    marginTop: 170, // 🔹 Baja todo el contenido debajo del header
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B2E1E',
    marginVertical: 10,
  },
  createContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 60, // 🔹 Baja más la sección "CREAR NUEVO"
  },
  createButton: {
    alignItems: 'center',
  },
  createImage: {
    width: 50,
    height: 50,
  },
  createText: {
    marginTop: 5,
    fontSize: 14,
    color: '#4B2E1E',
  },
  materialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50, // 🔹 Baja más la sección "MATERIALES"
  },
  viewAll: {
    color: '#4B2E1E',
    fontWeight: 'bold',
  },
  materialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // 🔹 Baja más las tarjetas de materiales
  },
  materialBox: {
    width: 110,
    height: 130,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  materialImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  materialText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});
