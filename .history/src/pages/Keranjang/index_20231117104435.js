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
      idPerProduct: "1-S-Hot",
      image: 19,
      name: "Cappuccino Romeo",
      price: 25000,
      quantity: 1,
      size: "S",
      temperature: "Hot",
      totalPriceProduct: 25000,
    },
    {
      description: "with chocolatte",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 1,
      idPerProduct: "1-S-Hot",
      image: 19,
      name: "Cappuccino Romeo",
      price: 25000,
      quantity: 2,
      size: "S",
      temperature: "Hot",
      totalPriceProduct: 50000,
    },
    {
      description: "with oat milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 2,
      idPerProduct: "2-S-Ice",
      image: 20,
      name: "Espresso Jakarta",
      price: 23000,
      quantity: 1,
      size: "S",
      temperature: "Ice",
      totalPriceProduct: 23000,
    },
  ];

  const [data, setData] = useState(sampleData ?? []);
  const [ongkir, setOngkir] = useState(10000);
  //   const [quantity, setQuantity] = useState(1);
  const [activeOrderMethod, setActiveOrderMethod] = useState(0);
  //   const [activeIndexTemperature, setActiveIndexTemperature] = useState(0);
  const [modalKeranjang, setModalKeranjang] = useState(false);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const totalPriceAll = data.reduce((acc, item) => {
    return acc + item.totalPriceProduct;
  }, 0);

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
            <TouchableOpacity
              disabled={activeOrderMethod == 0 ? true : false}
              onPress={() => setActiveOrderMethod(0)}
              style={{
                backgroundColor: activeOrderMethod == 0 ? "#C67C4E" : "#F2F2F2",
                height: 50,
                width: "48%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: activeOrderMethod == 0 ? "white" : "black",
                }}
              >
                Pick Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={activeOrderMethod == 1 ? true : false}
              onPress={() => setActiveOrderMethod(1)}
              style={{
                backgroundColor: activeOrderMethod == 1 ? "#C67C4E" : "#F2F2F2",
                height: 50,
                width: "48%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: activeOrderMethod == 1 ? "white" : "black",
                }}
              >
                Delivery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeOrderMethod === 0 ? (
          <View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
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

              <View>
                <Image
                  source={require("../../../assets/maps.jpg")}
                  style={{ height: 60, width: 60, borderRadius: 13 }}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                height: 2,
                width: "100%",
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "#EAEAEA",
              }}
            />

            {data.map((data, index) => (
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
                    <Text style={{ color: "#B7B7B7", marginVertical: 1 }}>
                      Size: {data.size}, Temperature: {data.temperature}
                    </Text>
                    <Text>Rp.{numberWithCommas(data.totalPriceProduct)}</Text>
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
          <View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 5,
                  }}
                >
                  Alamat Tujuan
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    marginBottom: 3,
                  }}
                >
                  Jl. Ciragil, Kebayoran Baru
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#B7B7B7",
                  }}
                >
                  Amir (08123456789)
                </Text>
              </View>

              <View>
                <Image
                  source={require("../../../assets/maps.jpg")}
                  style={{ height: 60, width: 60, borderRadius: 13 }}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                height: 2,
                width: "100%",
                marginTop: 20,
                marginBottom: 15,
                backgroundColor: "#EAEAEA",
              }}
            />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../../assets/logo-delivery.jpg")}
                  style={{ height: 60, width: 60 }}
                  resizeMode="contain"
                />
                <View style={{ marginTop: 4, marginLeft: 7 }}>
                  <Text style={{ fontWeight: 500 }}>
                    Estimasi Tiba 20 Menit - 1 jam
                  </Text>
                  <Text style={{ color: "#B7B7B7" }}>
                    Rp.{numberWithCommas(ongkir)}
                  </Text>
                </View>
              </View>
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

            {data.map((data, index) => (
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
                    <Text style={{ color: "#B7B7B7", marginVertical: 1 }}>
                      Size: {data.size}, Temperature: {data.temperature}
                    </Text>
                    <Text>Rp.{numberWithCommas(data.totalPriceProduct)}</Text>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>Subtotal</Text>
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Rp.{numberWithCommas(totalPriceAll)}
              </Text>
            </View>

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
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Rp.{numberWithCommas(ongkir)}
              </Text>
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
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Rp.{numberWithCommas(totalPriceAll + ongkir)}
              </Text>
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
