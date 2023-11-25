import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#131313" />
      <View style={{flex: 1}}>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
