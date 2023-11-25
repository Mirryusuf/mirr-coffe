import React from 'react';
import { View, ScrollView, Text } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* Konten di bagian atas */}
        <View>
          <Text>Konten di bagian atas</Text>
        </View>

        {/* Elemen tetap di bagian bawah menggunakan position: absolute */}
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Text>Konten tetap di bagian bawah</Text>
        </View>

        {/* Elemen tambahan agar ScrollView memiliki tinggi yang sesuai */}
        <View style={{ height: 200 }} />
      </ScrollView>
    );
  }
}

export default Home;
