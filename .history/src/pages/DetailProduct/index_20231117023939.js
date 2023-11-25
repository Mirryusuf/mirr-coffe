import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function DetailProduct({ navigation, route }) {
  const coffeeSize = ["S", "M", "L"];
  const coffeeTemperature = ["Hot", "Ice"];

  const [data, setData] = useState(route.params.data ?? []);
  const [price, setPrice] = useState(route.params.data.price ?? 0);
  const [quantity, setQuantity] = useState(1);
  const [activeIndexSize, setActiveIndexSize] = useState(0);
  const [activeIndexTemperature, setActiveIndexTemperature] = useState(0);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const handleDecrement = useCallback(() => {
    if (quantity === 1) return false;
    setQuantity((prev) => prev - 1);
    setPrice(price - data.price);
  }, [quantity, data]);

  const handleIncrement = useCallback(() => {
    setQuantity((prev) => prev + 1);
    setPrice(price + data.price);
  }, [quantity, data]);

  const handleKeranjang = useCallback(() => {
    let setupData = {
      ...data,
      size: coffeeSize[activeIndexSize],
      temperature: coffeeTemperature[activeIndexTemperature],
      quantity: quantity,
      totalPriceProduct: price,
    };
  }, [
    data,
    coffeeSize,
    coffeeTemperature,
    activeIndexSize,
    activeIndexTemperature,
    quantity,
    price,
  ]);

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

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ marginVertical: 24, marginTop: 10 }}>
          <Image
            source={data.image}
            style={{ height: 315, width: "100%", borderRadius: 16 }}
            resizeMode="cover"
          />
        </View>

        <View style={{ marginBottom: 24 }}>
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

          <View style={{ marginVertical: 20 }}>
            <View style={{ marginBottom: 11 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Size
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {coffeeSize.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    height: 38,
                    width: "30%",
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    backgroundColor:
                      index === activeIndexSize ? "#C67C4E" : "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => setActiveIndexSize(index)}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: index === activeIndexSize ? "white" : "#C67C4E",
                      fontWeight: "600",
                    }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <View style={{ marginBottom: 11 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Temperature
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              {coffeeTemperature.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    height: 38,
                    width: "30%",
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    backgroundColor:
                      index === activeIndexTemperature ? "#C67C4E" : "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "6%",
                  }}
                  onPress={() => setActiveIndexTemperature(index)}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color:
                        index === activeIndexTemperature ? "white" : "#C67C4E",
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

        <Modal
          isVisible={true}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.75}
          // BELOW ARE FOR ENHANCES PERFORMANCE
          useNativeDriver={true}
          useNativeDriverForBackdrop={true}
          hideModalContentWhileAnimating={true}
        >
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <View
              style={{
                width: "100%",
                padding: 20,
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../../../assets/images/logo-success.png")}
                style={{
                  alignSelf: "center",
                  width: 75,
                  height: 75,
                  marginVertical: 10,
                }}
              />
              <Text>oiii</Text>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Rp.{numberWithCommas(price)}
            </Text>
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
                onPress={() => handleDecrement()}
              >
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => handleIncrement()}
              >
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 50,
            width: "100%",
            borderRadius: 35,
            backgroundColor: "#C67C4E",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            Masuk Keranjang
          </Text>
        </View>
      </View>
    </>
  );
}
