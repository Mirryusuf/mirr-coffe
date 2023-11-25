import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" />
      <View style={{ flex: 1, marginTop: 30 }}>
        <LinearGradient
          colors={["#131313", "#313131"]}
          style={{ height: 280, borderBottomLeftRadius: 5, borderBottomRightRadius: 50 }}
        ></LinearGradient>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
