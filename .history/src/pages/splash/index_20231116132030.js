import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000)
  }, [])

  return (
    <View>
      <Text>Splash page!</Text>
    </View>
  );
}
