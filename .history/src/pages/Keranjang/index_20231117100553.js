import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Keranjang({ navigation, route }) {
  // const orderMethod = ["Pick Up", "Delivery"];
  //   const coffeeTemperature = ["Hot", "Ice"];

  const sampleData = [
    {
      description: "with chocolatte",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 1,
      image: 19,
      name: "Cappuccino Romeo",
      price: 25000,
      quantity: 1,
      size: "M",
      temperature: "Hot",
      totalPriceProduct: 25000,
    },
    {
      description: "with oat milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 2,
      image: 20,
      name: "Espresso Jakarta",
      price: 23000,
      quantity: 1,
      size: "S",
      temperature: "Ice",
      totalPriceProduct: 23000,
    },
  ];

  //   const [data, setData] = useState(route.params.data ?? []);
  //   const [price, setPrice] = useState(route.params.data.price ?? 0);
  //   const [quantity, setQuantity] = useState(1);
  const [activeOrderMethod, setActiveOrderMethod] = useState(0);
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
          backgroundColor: "white",
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
        <View style={{ marginRight: -11, padding: 10, opacity: 0 }}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
      >
        <View style={{ marginTop: 24, marginTop: 10 }}>
          <View
            style={{
              backgroundColor: "#F2F2F2",
              width: "100%",
              borderRadius: 14,
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#C67C4E",
                height: 50,
                width: "48%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
                Pick Up
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: "48%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Delivery</Text>
            </View>
          </View>
        </View>

        {activeOrderMethod === 0 ? (
          <View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginBottom: 5,
                }}
              >
                Alamat Pick Up
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  marginBottom: 3,
                }}
              >
                Mirr Coffe Ciragil
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#B7B7B7",
                }}
              >
                Jl. Ciragil, Kebayoran Baru
              </Text>
            </View>

            <View
              style={{
                height: 2,
                width: "100%",
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "#EAEAEA",
              }}
            />

            {sampleData.map((data, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={data.image}
                      style={{
                        height: 54,
                        width: 54,
                        borderRadius: 16,
                        marginRight: 15,
                      }}
                      resizeMode="cover"
                    />
                  </View>

                  <View>
                    <Text>{data.name}</Text>
                    <Text style={{color: "#B7B7B7", marginVertical: 2}}>
                      Size: {data.size}, Temperature: {data.temperature}
                    </Text>
                    <Text>Rp.{numberWithCommas(data.price)}</Text>
                  </View>
                </View>

                <View>
                  <View
                    style={{
                      width: 85,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      // onPress={() => handleDecrement()}
                    >
                      <AntDesign name="minuscircleo" size={20} color="black" />
                    </TouchableOpacity>
                    <Text>{data.quantity}</Text>
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      // onPress={() => handleIncrement()}
                    >
                      <AntDesign name="pluscircleo" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <View
              style={{
                height: 2,
                width: "100%",
                marginBottom: 20,
                backgroundColor: "#EAEAEA",
              }}
            />
          </View>
        ) : (
          <View
            style={{
              height: 2,
              width: "100%",
              marginVertical: 24,
              marginBottom: 20,
              backgroundColor: "#EAEAEA",
            }}
          />
        )}

        <View>
          <View style={{ marginBottom: 11 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Ringkasan Transaksi
            </Text>
          </View>

          <View>
            {sampleData.map((data, index) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 14, color: "#2F2D2C" }}>Subtotal</Text>
                <Text style={{ fontSize: 14, color: "#2F2D2C" }}>Rp.5.000</Text>
              </View>
            ))}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Ongkos Kirim
              </Text>
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>Rp.5.000</Text>
            </View>

            <View
              style={{
                height: 2,
                width: "100%",
                marginVertical: 14,
                marginBottom: 20,
                backgroundColor: "#EAEAEA",
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Total Harga
              </Text>
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>Rp.5.000</Text>
            </View>
          </View>
        </View>

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
