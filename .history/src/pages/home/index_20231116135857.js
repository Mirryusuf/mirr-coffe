import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" />
      <View style={{flex: 1, marginTop: 30}}>
        <LinearGradient style={{height: 280}}>

        </LinearGradient>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
