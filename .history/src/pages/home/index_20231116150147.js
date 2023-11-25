import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TextInput, Touchable, View } from "react-native";
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

          <View style={{marginBottom: 24}}>
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

          <View>
            <Image source={require("../../../assets/banner-promo.png")} style={{width: "100%", height: 240}} resizeMode="stretch" />
          </View>
        </LinearGradient>
        <Text>Home page!</Text>
      </ScrollView>
    </>
  );
}
