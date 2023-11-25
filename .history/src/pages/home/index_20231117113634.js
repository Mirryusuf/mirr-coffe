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

export default function Home({ navigation }) {
  const coffeeTypes = [
    "All",
    "Cappuccino",
    "Espresso",
    "Latte",
    "Mocha",
    "Americano",
  ];
  const coffeProduct = [
    {
      id: 1,
      name: "Cappuccino Romeo",
      price: 25000,
      description: "with chocolatte",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../../assets/cappuccino-1.jpg"),
    },
    {
      id: 2,
      name: "Espresso Jakarta",
      price: 23000,
      description: "with oat milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../../assets/espresso-1.jpg"),
    },
    {
      id: 3,
      name: "Latte Caramel",
      price: 29000,
      description: "with extra caramel",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../../assets/latte-1.jpg"),
    },
    {
      id: 4,
      name: "Mocha Gajah",
      price: 27000,
      description: "with extra milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../../assets/mocha-1.jpg"),
    },
    {
      id: 5,
      name: "Americano Timur",
      price: 25000,
      description: "with special beans",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../../assets/americano-1.jpg"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const keyExtractor = useCallback((item, index) => `${index}-${item.id}`, []);

  const renderHeader = () => {
    return (
      <View>
        <LinearGradient
          colors={["#131313", "#313131"]}
          style={{
            height: 264,
            paddingHorizontal: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginVertical: 30 }}>
            <View
              style={{
                width: "70%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 12, color: "#B7B7B7" }}>Location</Text>
              <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                Jl. Ciragil, Kebayoran Baru
              </Text>
            </View>
            <View
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
            </View>
          </View>

          <View>
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
              onPress={() => navigation.push("Keranjang")}
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
          </View>
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
      
      <View style={{backgroundColor: "red", height: 55, width: 55, borderRadius: 50}}>
        <Text>11</Text>
      </View>
    </>
  );
}
