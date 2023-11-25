import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function DetailOrder({ navigation, route }) {
  const [data, setData] = useState(route.params.data[0] ?? []);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

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
          backgroundColor: "white",
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
            Detail Order
          </Text>
        </View>
        <View style={{ marginRight: -11, padding: 10, opacity: 0 }}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
      >
        {data.orderMethod == "Delivery" ? (
          <>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ width: "70%" }}>
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
                  numberOfLines={2}
                >
                  {data.alamatDelivery.length
                    ? data.alamatDelivery[0].alamat
                    : "-"}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#B7B7B7",
                  }}
                >
                  {data.alamatDelivery.length
                    ? `${data.alamatDelivery[0].namaPenerima} (${data.alamatDelivery[0].noTelpon})`
                    : "-"}
                </Text>
              </View>

              <View>
                <Image
                  source={require("../../../assets/maps.jpg")}
                  style={{ height: 60, width: 60, borderRadius: 13 }}
                  resizeMode="cover"
                />
              </View>
            </View>

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
                    Rp.{numberWithCommas(data.ongkir)}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View
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
                {data.alamatPickup.split("; ")[0]}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#B7B7B7",
                }}
              >
                {data.alamatPickup.split("; ")[1]}
              </Text>
            </View>

            <View>
              <Image
                source={require("../../../assets/maps.jpg")}
                style={{ height: 60, width: 60, borderRadius: 13 }}
                resizeMode="cover"
              />
            </View>
          </View>
        )}

        <View
          style={{
            height: 2,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: "#EAEAEA",
          }}
        />

        {data.product.map((item, index) => {
          return (
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
                    source={item.image}
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
                  <Text>{item.name}</Text>
                  <Text style={{ color: "#B7B7B7", marginVertical: 1 }}>
                    Size: {item.size}, Temperature: {item.temperature}
                  </Text>
                  <Text>Rp.{numberWithCommas(item.totalPriceProduct)}</Text>
                </View>
              </View>

              <View>
                <Text style={{ textAlign: "center" }}>Jumlah</Text>
                <View
                  style={{
                    width: 85,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{ padding: 5, opacity: 0 }}
                    // onPress={() => handleDecrement(item.idPerProduct)}
                  >
                    <AntDesign name="minuscircleo" size={20} color="black" />
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity
                    style={{ padding: 5, opacity: 0 }}
                    // onPress={() => handleIncrement(item.idPerProduct)}
                  >
                    <AntDesign name="pluscircleo" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}

        <View
          style={{
            height: 2,
            width: "100%",
            marginBottom: 20,
            backgroundColor: "#EAEAEA",
          }}
        />

        <View>
          <View style={{ marginBottom: 11 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Metode Pembayaran
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
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                {data.paymentMethod.name}
              </Text>
              <Image
                source={data.paymentMethod.image}
                style={{
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                  marginTop: -20,
                }}
              />
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
                Rp.
                {data.orderMethod == "Delivery"
                  ? numberWithCommas(data.totalHarga - data.ongkir)
                  : numberWithCommas(data.totalHarga)}
              </Text>
            </View>

            {data.orderMethod == "Delivery" ? (
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
                  Rp.{numberWithCommas(data.ongkir)}
                </Text>
              </View>
            ) : null}

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
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Total Harga
              </Text>
              <Text style={{ fontSize: 14, color: "#2F2D2C" }}>
                Rp.{numberWithCommas(data.totalHarga)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
