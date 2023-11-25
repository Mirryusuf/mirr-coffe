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
      <Image style={{width: "100%", aspectRatio: 1}} source={require('../../../assets/splash.png')} />
    </View>
  );
}
