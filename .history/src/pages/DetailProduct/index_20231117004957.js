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
      <StatusBar style="auto" />
      <ScrollView style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
        <View style={{flexDirection: "row", justifyContent: "space-between", height: 56, backgroundColor: "pink"}}>
          <View>
            <Text>Back</Text>
          </View>
          <View>
            <Text>Title</Text>
          </View>
          <View>
            <Text>Favorite</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
