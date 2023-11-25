import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

export default function PilihPembayaran({ navigation, route }) {
  const dispatch = useDispatch();

  const [data, setData] = useState(route.params.data ?? null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState([
    {
      id: 1,
      name: "Gopay",
      image: require("../../../assets/logo-gopay.png"),
      active: false,
    },
    {
      id: 2,
      name: "OVO",
      image: require("../../../assets/logo-ovo.jpg"),
      active: false,
    },
    {
      id: 3,
      name: "DANA",
      image: require("../../../assets/logo-dana.png"),
      active: false,
    },
    {
      id: 4,
      name: "Shopeepay",
      image: require("../../../assets/logo-shopee.png"),
      active: false,
    },
  ]);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const handlePaymentMethodSelect = (selectedId) => {
    const updatedMethods = paymentMethod.map((method) => ({
      ...method,
      active: method.id === selectedId,
    }));
    setPaymentMethod(updatedMethods);
  };

  const handleBayar = useCallback(() => {
    setLoading(true);
    const selectedMethod = paymentMethod.find((method) => method.active);
    let setupData = { ...data, paymentMethod: selectedMethod };

    dispatch({ type: "SET_ORDERLIST", payload: setupData });
    dispatch({ type: "SET_KERANJANG", payload: [] });

    setTimeout(() => {
      setLoading(false);
      navigation.push("Main");
    }, 1500);
  }, [data, paymentMethod]);

  const isAnyPaymentMethodSelected = paymentMethod.some(
    (method) => method.active
  );

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
            Pilih Pembayaran
          </Text>
        </View>
        <View style={{ marginRight: -11, padding: 10, opacity: 0 }}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </View>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            height: 112,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Rp.{numberWithCommas(data.totalHarga)}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 12,
            paddingBottom: 5,
          }}
        >
          {paymentMethod.map((x, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginBottom: 15 }}
                onPress={() => handlePaymentMethodSelect(x.id)}
              >
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={x.image}
                      style={{
                        borderRadius: 50,
                        width: 40,
                        height: 40,
                        marginVertical: 10,
                        resizeMode: "contain",
                        marginRight: 10,
                      }}
                    />
                    <Text style={{ fontSize: 14, fontWeight: 600 }}>
                      {x.name}
                    </Text>
                  </View>

                  <Ionicons
                    name={
                      x.active
                        ? "radio-button-on-outline"
                        : "radio-button-off-outline"
                    }
                    size={24}
                    color={x.active ? "#C67C4E" : "black"}
                    style={{ marginTop: 5 }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {loading ? (
        <View
          style={{
            zIndex: 999,
            position: "absolute",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(25, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
          }}
        >
          <ActivityIndicator size={40} color={"#C67C4E"} />
        </View>
      ) : null}

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
          disabled={!isAnyPaymentMethodSelected}
          onPress={() => handleBayar()}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            Bayar Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
