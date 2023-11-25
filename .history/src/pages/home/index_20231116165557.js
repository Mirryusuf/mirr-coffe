import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const coffeeTypes = ['Cappuccino', 'Espresso', 'Latte', 'Mocha', 'Americano'];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
      {coffeeTypes.map((type, index) => (
        <TouchableOpacity
          key={index}
          style={{
            height: 38,
            paddingHorizontal: 16,
            borderRadius: 12,
            backgroundColor: index === activeIndex ? "#C67C4E" : "white",
            justifyContent: "center",
            alignItems: "center",
            marginRight: index === coffeeTypes.length - 1 ? 20 : 0,
          }}
          onPress={() => setActiveIndex(index)}
        >
          <Text style={{ fontSize: 14, color: index === activeIndex ? "white" : "#C67C4E", fontWeight: "600" }}>
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MyComponent;
