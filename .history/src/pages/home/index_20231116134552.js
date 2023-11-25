import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <View style={{flex: 1}}>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
