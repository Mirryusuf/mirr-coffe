import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <StatusBar style="auto" backgroundColor="#131313"/>
      <Text>Home page!</Text>
    </View>
  );
}
