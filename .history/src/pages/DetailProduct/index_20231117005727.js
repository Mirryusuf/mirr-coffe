import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function DetailProduct({ navigation, route }) {
  console.log("🚀 ~ file: index.js:7 ~ DetailProduct ~ props:", route)
  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 56,
            backgroundColor: "pink",
          }}
        >
          <View
            style={{ backgroundColor: "cyan", marginLeft: -16, padding: 10 }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Detail
            </Text>
          </View>
          <View
            style={{ backgroundColor: "cyan", marginRight: -11, padding: 10 }}
          >
            <MaterialIcons name="favorite-border" size={24} color="black" />
          </View>
        </View>

        <View>

        </View>
      </ScrollView>
    </>
  );
}
