import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function OrderList() {
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 56,
          marginTop: 30,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginLeft: -16, padding: 10 }}>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
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
        <View style={{ marginRight: -11, padding: 10 }}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </View>
      </View>
    </>
  );
}
