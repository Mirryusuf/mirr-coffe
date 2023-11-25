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
          style={{ height: 280, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        >
          <View style={{flexDirection: "row", height: 44}}>
            <View style={{backgroundColor: "pink", width: "70%"}}>
              <Text>Location</Text>
              <Text>Jl. Ciragil, Kebayoran Baru</Text>
            </View>
            <View style={{backgroundColor: "cyan", width: "30%"}}>
              <Text>Test</Text>
            </View>
          </View> 
        </LinearGradient>
        <Text>Home page!</Text>
      </View>
    </>
  );
}
