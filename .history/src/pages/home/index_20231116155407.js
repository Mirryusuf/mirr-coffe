import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Container Utama */}
      <View style={styles.mainContainer}>
        {/* Container Dalam dengan posisi absolute */}
        <View style={styles.absoluteContainer}>
          {/* Konten di dalam container absolute */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    height: 200,
    position: 'relative',
  },
  absoluteContainer: {
    position: 'absolute',
    bottom: -100, // Menggeser container ke atas sejauh 100 unit dari bawah
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;
