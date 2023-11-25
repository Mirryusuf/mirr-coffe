import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" />
      <ScrollView style={{ flex: 1, marginTop: 30 }}>
        <LinearGradient
          colors={["#131313", "#313131"]}
          style={{
            position: "relative",
            zIndex: 0,
            height: 280,
            paddingHorizontal: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginVertical: 30 }}>
            <View
              style={{
                // backgroundColor: "pink",
                width: "70%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 12, color: "#B7B7B7" }}>Location</Text>
              <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                Jl. Ciragil, Kebayoran Baru
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "cyan",
                width: "30%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Image
                source={require("../../../assets/profile-small.jpg")}
                style={{ width: 44, height: 44, borderRadius: 14 }}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                backgroundColor: "#313131",
                height: 52,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
              }}
            >
              <Feather
                name="search"
                size={20}
                color="white"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, color: "#989898", fontSize: 14 }}
                value={"Cari Kopi"}
                editable={false}
              />
            </View>
          </View>
        </LinearGradient>

        <View
          style={{
            flex: 1,
            position: "absolute",
            // bottom: 0,
            bottom: -50,
            zIndex: 99,
            width: "70%",
            height: 140,
            backgroundColor: "pink",
          }}
        >
          <Text>Test</Text>
          {/* <Image
              source={require("../../../assets/banner-promo.png")}
              style={{ height: 250, width: "100%", borderRadius: 16 }}
              resizeMode="cover"
            /> */}
        </View>
        {/* <Text>Home page!</Text> */}
      </ScrollView>
    </>
  );
}
