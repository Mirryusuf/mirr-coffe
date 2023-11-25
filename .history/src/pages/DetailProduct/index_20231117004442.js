import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function DetailProduct() {
  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  return (
    <>
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView style={{ flex: 1, marginTop: 30 }}>
        <View>
          <View>
            <Text>Back</Text>
          </View>
          <View>
            <Text>Back</Text>
          </View>
          <View>
            <Text>Back</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
