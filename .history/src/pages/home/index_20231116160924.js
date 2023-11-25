import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Konten di dalam ScrollView */}
      <View style={styles.scrollContent}>
        {/* Container Dalam dengan posisi absolute */}
        <View style={styles.absoluteContainer}>
          {/* Konten di dalam container absolute */}
          <Text>oiii</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    height: '100%', // Penting untuk membuat konten ScrollView sesuai dengan tinggi layar
  },
  absoluteContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Home;
