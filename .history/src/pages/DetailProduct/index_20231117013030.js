import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function DetailProduct({ navigation, route }) {
  const coffeeSize = ["S", "M", "L"];

  const [data, setData] = useState(route.params.data ?? []);
  const [activeIndex, setActiveIndex] = useState(0);

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
          }}
        >
          <View style={{ marginLeft: -16, padding: 10 }}>
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
          <View style={{ marginRight: -11, padding: 10 }}>
            <MaterialIcons name="favorite-border" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginVertical: 24 }}>
          <Image
            source={data.image}
            style={{ height: 315, width: "100%", borderRadius: 16 }}
            resizeMode="cover"
          />
        </View>

        <View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {data.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#9B9B9B",
                  marginTop: 3,
                }}
              >
                {data.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" size={20} color="gold" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  4.8
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9B9B9B",
                  }}
                >
                  {" "}
                  (230)
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 2,
              width: "100%",
              marginVertical: 24,
              marginBottom: 20,
              backgroundColor: "#EAEAEA",
            }}
          />

          <View>
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Deskripsi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9B9B9B",
                }}
              >
                {data.descriptionFull}
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 24 }}>
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Size
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {coffeeSize.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    height: 38,
                    width: "30%",
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    backgroundColor:
                      index === activeIndex ? "#C67C4E" : "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => setActiveIndex(index)}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: index === activeIndex ? "white" : "#C67C4E",
                      fontWeight: "600",
                    }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
