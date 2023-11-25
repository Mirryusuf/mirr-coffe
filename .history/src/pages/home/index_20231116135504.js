import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" />
      <View style={{flex: 1, marginTop: 30}}>
        <View style={{height: 280, backgroundColor: "#131313"}}>

        </View>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
