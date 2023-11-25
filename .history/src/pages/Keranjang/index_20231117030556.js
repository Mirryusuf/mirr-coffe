import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Order({ navigation, route }) {
  //   const coffeeSize = ["S", "M", "L"];
  //   const coffeeTemperature = ["Hot", "Ice"];

  //   const [data, setData] = useState(route.params.data ?? []);
  //   const [price, setPrice] = useState(route.params.data.price ?? 0);
  //   const [quantity, setQuantity] = useState(1);
  //   const [activeIndexSize, setActiveIndexSize] = useState(0);
  //   const [activeIndexTemperature, setActiveIndexTemperature] = useState(0);
  const [modalKeranjang, setModalKeranjang] = useState(false);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  //   const handleDecrement = useCallback(() => {
  //     if (quantity === 1) return false;
  //     setQuantity((prev) => prev - 1);
  //     setPrice(price - data.price);
  //   }, [quantity, data]);

  //   const handleIncrement = useCallback(() => {
  //     setQuantity((prev) => prev + 1);
  //     setPrice(price + data.price);
  //   }, [quantity, data]);

  //   const handleKeranjang = useCallback(() => {
  //     let setupData = {
  //       ...data,
  //       size: coffeeSize[activeIndexSize],
  //       temperature: coffeeTemperature[activeIndexTemperature],
  //       quantity: quantity,
  //       totalPriceProduct: price,
  //     };
  //     console.log(
  //       "🚀 ~ file: index.js:37 ~ handleKeranjang ~ setupData:",
  //       setupData
  //     );
  //     setModalKeranjang(true);
  //   }, [
  //     data,
  //     coffeeSize,
  //     coffeeTemperature,
  //     activeIndexSize,
  //     activeIndexTemperature,
  //     quantity,
  //     price,
  //   ]);

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
            Order
          </Text>
        </View>
        <View style={{ marginRight: -11, padding: 10 }}></View>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <Modal
          isVisible={modalKeranjang}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.75}
          onBackdropPress={() => setModalKeranjang(false)}
          // BELOW ARE FOR ENHANCES PERFORMANCE
          useNativeDriver={true}
          useNativeDriverForBackdrop={true}
          hideModalContentWhileAnimating={true}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "70%",
                padding: 20,
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../../../assets/logo-success.png")}
                style={{
                  alignSelf: "center",
                  width: 75,
                  height: 75,
                  marginVertical: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 10,
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                Berhasil di Tambahkan
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          paddingHorizontal: 20,
          paddingVertical: 13,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: "100%",
            borderRadius: 35,
            backgroundColor: "#C67C4E",
            justifyContent: "center",
            alignItems: "center",
          }}
          //   onPress={() => handleKeranjang()}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
