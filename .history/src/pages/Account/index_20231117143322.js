import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Account({ navigation, route }) {
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 56,
          marginTop: 30,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Account
          </Text>
        </View>
      </View>
    </>
  );
}
