import React from 'react';
import { View, ScrollView, Text } from 'react-native';

class MyComponent extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* Konten di bagian atas */}
        <View>
          <Text>Konten di bagian atas</Text>
        </View>

        {/* Konten tetap di bagian bawah */}
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
          <Text>Konten tetap di bagian bawah</Text>
        </View>
      </ScrollView>
    );
  }
}

export default MyComponent;
