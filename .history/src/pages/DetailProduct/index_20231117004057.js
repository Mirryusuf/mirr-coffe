import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

export default function DetailProduct() {
  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" />
      <FlatList
        data={coffeProduct}
        style={{ flex: 1, marginTop: 30 }}
        columnWrapperStyle={{
          marginHorizontal: 20,
          marginBottom: 10,
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
      />
    </>
  );
}
