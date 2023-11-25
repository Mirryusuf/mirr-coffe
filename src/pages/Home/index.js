import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const userListGlobalState = useSelector(
    (state) => state.userReducer.userList
  );
  const keranjangGlobalState = useSelector(
    (state) => state.productReducer.keranjang
  );
  const productGlobalState = useSelector(
    (state) => state.productReducer.product
  );
  const coffeeTypes = [
    "All",
    "Cappuccino",
    "Espresso",
    "Latte",
    "Mocha",
    "Americano",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    setProduct(productGlobalState);
  }, [productGlobalState]);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );

      const cekUser = userListGlobalState.filter((x) => {
        return x.isLogin == true;
      });

      if (cekUser.length) {
        setIsLogin(true);

        const getLocation = cekUser[0].alamat?.filter((x) => {
          return x.active == true;
        });
        setLocation(getLocation ?? []);
      }

      return () => {
        backHandler.remove();
      };
    }, [])
  );

  const handleBackPress = () => {
    Alert.alert(
      "Konfirmasi",
      "Apakah Anda yakin ingin keluar dari aplikasi?",
      [
        { text: "Batal", onPress: () => {}, style: "cancel" },
        { text: "Keluar", onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );

    return true;
  };

  const handleLogout = useCallback(() => {
    setLoading(true);
    let dataUser = userListGlobalState;

    const foundUserIndex = dataUser.findIndex((x) => x.isLogin == true);

    if (foundUserIndex !== -1) {
      dataUser[foundUserIndex].isLogin = false;
    }

    dispatch({ type: "SET_USERLIST", payload: dataUser });

    setTimeout(() => {
      setIsLogin(false);
      setLoading(false);
      setLocation([]);
      Alert.alert("Berhasil", "Anda berhasil Logout!", [], {
        cancelable: true,
      });
    }, 1500);
  }, [userListGlobalState]);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const handleKeranjang = useCallback(() => {
    const cekUser = userListGlobalState.filter((x) => {
      return x.isLogin == true;
    });

    if (cekUser.length == 1) {
      navigation.push("Keranjang");
    } else {
      Alert.alert(
        "Gagal",
        "Anda belum login",
        [
          { text: "Batal", onPress: () => {}, style: "cancel" },
          { text: "Login", onPress: () => navigation.push("LoginRegister") },
        ],
        { cancelable: false }
      );
    }
  }, [userListGlobalState]);

  const keyExtractor = useCallback((item, index) => `${index}-${item.id}`, []);

  const filterProducts = useCallback(() => {
    if (activeIndex === 0) {
      setProduct(productGlobalState);
    } else {
      const filteredProducts = productGlobalState.filter(
        (item) => item.type == coffeeTypes[activeIndex]
      );
      setProduct(filteredProducts);
    }
  }, [activeIndex, productGlobalState]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const renderHeader = () => {
    return (
      <View>
        <LinearGradient
          colors={["#131313", "#313131"]}
          style={{
            height: 170,
            paddingHorizontal: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginVertical: 30 }}>
            <TouchableOpacity
              onPress={() =>
                isLogin
                  ? navigation.push("Alamat")
                  : navigation.push("LoginRegister")
              }
              style={{
                width: "70%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 12, color: "#B7B7B7" }}>Location</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontWeight: "600",
                  width: "50%",
                }}
                numberOfLines={1}
              >
                {location?.length ? location[0].alamat : "-"}
              </Text>
            </TouchableOpacity>

            <Menu
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <MenuTrigger>
                <Image
                  source={require("../../../assets/profile-small.jpg")}
                  style={{ width: 44, height: 44, borderRadius: 14 }}
                />
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    padding: 5,
                    width: 140,
                  },
                }}
              >
                <MenuOption
                  onSelect={() => {
                    isLogin ? handleLogout() : navigation.push("LoginRegister");
                  }}
                >
                  <Text style={isLogin ? { color: "red" } : null}>
                    {isLogin ? "Logout" : "Login"}
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>

            {/* <TouchableOpacity
              onPress={() => navigation.push("LoginRegister")}
              style={{
                width: "30%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Image
                source={require("../../../assets/profile-small.jpg")}
                style={{ width: 44, height: 44, borderRadius: 14 }}
              />
            </TouchableOpacity> */}
          </View>

          {/* <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#313131",
                height: 52,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
              }}
              // onPress={() => navigation.push("Keranjang")}
            >
              <Feather
                name="search"
                size={20}
                color="white"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, color: "#989898", fontSize: 14 }}
                value={"Cari Kopi"}
                editable={false}
              />
            </TouchableOpacity>
          </View> */}
        </LinearGradient>

        <View
          style={{
            marginTop: -70,
            zIndex: 99,
            marginHorizontal: 20,
            height: 140,
          }}
        >
          <Image
            source={require("../../../assets/banner-promo.png")}
            style={{ height: 140, width: "100%", borderRadius: 16 }}
            resizeMode="cover"
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 20, marginVertical: 24 }}
        >
          {coffeeTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={{
                height: 38,
                paddingHorizontal: 16,
                borderRadius: 12,
                backgroundColor: index === activeIndex ? "#C67C4E" : "white",
                justifyContent: "center",
                alignItems: "center",
                marginRight: index === coffeeTypes.length - 1 ? 40 : 10,
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
        </ScrollView>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 16,
          backgroundColor: "white",
          width: "48%",
          marginBottom: 13,
        }}
        onPress={() => navigation.push("DetailProduct", { data: item })}
      >
        <View>
          <View>
            <Image
              source={item.image}
              style={{ height: 165, width: "100%", borderRadius: 16 }}
              resizeMode="cover"
            />
          </View>
          <View style={{ paddingHorizontal: 10, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
              numberOfLines={1}
            >
              {item.name}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: "#9B9B9B",
                marginTop: 3,
              }}
              numberOfLines={1}
            >
              {item.description}
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: "#2F4B4E",
                marginTop: 8,
                fontWeight: "600",
              }}
              numberOfLines={1}
            >
              Rp.{numberWithCommas(item.price)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar style="auto" />
      <FlatList
        data={product}
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

      {loading ? (
        <View
          style={{
            zIndex: 999,
            position: "absolute",
            top: 30,
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

      <TouchableOpacity
        onPress={() => handleKeranjang()}
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          backgroundColor: "#C67C4E",
          height: 55,
          width: 55,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="cart-outline"
          size={26}
          color="white"
          style={{ marginRight: 2 }}
        />
        {keranjangGlobalState.length && isLogin ? (
          <View
            style={{
              position: "absolute",
              top: -6,
              right: -5,
              backgroundColor: "white",
              height: 24,
              width: 24,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#C67C4E" }}>
              {keranjangGlobalState.length}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </>
  );
}
