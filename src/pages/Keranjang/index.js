import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

export default function Keranjang({ navigation, route }) {
  const dispatch = useDispatch();
  const keranjangGlobalState = useSelector(
    (state) => state.productReducer.keranjang
  );
  const userListGlobalState = useSelector(
    (state) => state.userReducer.userList
  );
  const orderMethod = ["Pick Up", "Delivery"];

  const [data, setData] = useState([]);
  const [ongkir, setOngkir] = useState(10000);
  const [activeOrderMethod, setActiveOrderMethod] = useState(0);
  const [modalKeranjang, setModalKeranjang] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState(false);
  const [alamatPickup, setAlamatPickup] = useState(
    "Mirr Coffe Ciragil; Jl. Ciragil, Kebayoran Baru"
  );
  const [alamatDelivery, setAlamatDelivery] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPressKeranjang",
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [])
  );

  const handleBackPress = () => {
    navigation.push("Main");

    return true;
  };

  useEffect(() => {
    const getDataUser = userListGlobalState.filter((x) => {
      return x.isLogin == true;
    });

    if (getDataUser.length) {
      setDataUser(getDataUser);

      const getLocation = getDataUser[0].alamat.filter((x) => {
        return x.active == true;
      });
      setAlamatDelivery(getLocation);
    }

    if (route.params?.active) {
      setActiveOrderMethod(route.params.active);
    }
  }, [userListGlobalState]);

  useEffect(() => {
    if (dataUser.length) {
      const getKeranjangByUser = keranjangGlobalState.filter((x) => {
        return dataUser[0].id == x.userId;
      });

      setData(getKeranjangByUser);
    }
  }, [keranjangGlobalState, dataUser]);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const totalPriceAll = data.reduce((acc, item) => {
    return acc + item.totalPriceProduct;
  }, 0);

  const handleDecrement = useCallback(
    (idPerProduct) => {
      setData((prevData) => {
        const updatedData = prevData
          .map((product) =>
            product.idPerProduct === idPerProduct
              ? {
                  ...product,
                  quantity: Math.max(product.quantity - 1, 0),
                  totalPriceProduct: Math.max(
                    product.totalPriceProduct - product.price,
                    0
                  ),
                }
              : product
          )
          .filter((product) => product.quantity > 0);

        dispatch({ type: "SET_KERANJANG", payload: updatedData });
        return updatedData;
      });
    },
    [dispatch]
  );

  const handleIncrement = useCallback(
    (idPerProduct) => {
      setData((prevData) => {
        const updatedData = prevData.map((product) =>
          product.idPerProduct === idPerProduct
            ? {
                ...product,
                quantity: product.quantity + 1,
                totalPriceProduct: product.totalPriceProduct + product.price,
              }
            : product
        );

        dispatch({ type: "SET_KERANJANG", payload: updatedData });
        return updatedData;
      });
    },
    [dispatch]
  );

  const keyExtractor = useCallback(
    (item, index) => `${index}-${item.idPerProduct}`,
    []
  );

  const handleOrder = useCallback(() => {
    setLoading(true);
    let setupData;
    let idOrder = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    let currentDate = new Date();
    let createdAt = `${("0" + currentDate.getHours()).slice(-2)}:${(
      "0" + currentDate.getMinutes()
    ).slice(-2)}, ${("0" + currentDate.getDate()).slice(-2)}-${(
      "0" +
      (currentDate.getMonth() + 1)
    ).slice(-2)}-${currentDate.getFullYear()}`;

    if (activeOrderMethod == 1) {
      setupData = {
        id: idOrder,
        userId: dataUser[0].userId,
        orderMethod: orderMethod[activeOrderMethod],
        alamatDelivery: alamatDelivery,
        ongkir: ongkir,
        totalHarga: totalPriceAll + ongkir,
        product: data,
        createdAt,
      };
    } else {
      setupData = {
        id: idOrder,
        userId: dataUser[0].userId,
        orderMethod: orderMethod[activeOrderMethod],
        alamatPickup: alamatPickup,
        totalHarga: totalPriceAll,
        product: data,
        createdAt,
      };
    }

    setTimeout(() => {
      setLoading(false);
      navigation.push("PilihPembayaran", { data: setupData });
    }, 1500);
  }, [
    data,
    dataUser,
    totalPriceAll,
    ongkir,
    alamatDelivery,
    alamatPickup,
    activeOrderMethod,
  ]);

  const renderHeader = () => {
    return (
      <View>
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

        {data.length ? (
          <>
            {activeOrderMethod == 0 ? (
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
                    {alamatPickup.split("; ")[0]}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#B7B7B7",
                    }}
                  >
                    {alamatPickup.split("; ")[1]}
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
            ) : (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("Alamat", { back: "Keranjang; 1" })
                  }
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
                      {alamatDelivery.length ? alamatDelivery[0].alamat : "-"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#B7B7B7",
                      }}
                    >
                      {alamatDelivery.length
                        ? `${alamatDelivery[0].namaPenerima} (${alamatDelivery[0].noTelpon})`
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
              </>
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
          </>
        ) : null}
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
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
              onPress={() => handleDecrement(item.idPerProduct)}
            >
              <AntDesign name="minuscircleo" size={20} color="black" />
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={() => handleIncrement(item.idPerProduct)}
            >
              <AntDesign name="pluscircleo" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return data.length ? (
      <View>
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

            {activeOrderMethod == 1 ? (
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
                Rp.
                {activeOrderMethod == 1
                  ? numberWithCommas(totalPriceAll + ongkir)
                  : numberWithCommas(totalPriceAll)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    ) : null;
  };

  const renderEmpty = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 250,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Keranjang Kosong
        </Text>
      </View>
    );
  };

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
            onPress={() => handleBackPress()}
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

      <FlatList
        data={data}
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
      />

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
          onPress={() => (data.length ? handleOrder() : navigation.goBack())}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            {data.length ? "Order" : "Lihat Menu"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
