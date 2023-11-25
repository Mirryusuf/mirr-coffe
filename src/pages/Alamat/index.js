import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  BackHandler,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Alamat({ navigation, route }) {
  const dispatch = useDispatch();
  const userListGlobalState = useSelector(
    (state) => state.userReducer.userList
  );

  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPressAlamat",
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [])
  );

  const handleBackPress = () => {
    if (route.params?.back) {
      navigation.push(`${route.params?.back.split("; ")[0]}`, {
        active: route.params?.back.split("; ")[1],
      });
    } else {
      navigation.push("Main");
    }

    return true;
  };

  useEffect(() => {
    const getDataUser = userListGlobalState.filter((x) => {
      return x.isLogin == true;
    });

    if (getDataUser.length) {
      setData(getDataUser[0].alamat);
    }
  }, [userListGlobalState]);

  const handleButton = useCallback(
    (id) => {
      let data = userListGlobalState;

      const getDataUser = data.filter((x) => {
        return x.isLogin == true;
      });

      const setActive = getDataUser[0].alamat.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });

      setData(setActive);
      data[0].alamat = setActive;

      dispatch({ type: "SET_ALAMATLIST", payload: data });
    },
    [userListGlobalState]
  );

  const keyExtractor = useCallback((item, index) => `${index}-${item.id}`, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 15 }}
        onPress={() => handleButton(item.id)}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: item.active ? "#C67C4E" : "grey",
            borderRadius: 14,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {item.namaPenerima}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                padding: 5,
                color: "white",
                borderRadius: 5,
                marginTop: -2,
                backgroundColor: item.active ? "#C67C4E" : "white",
              }}
            >
              {item.active ? "Utama" : null}
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 14,
              }}
            >
              {item.namaAlamat} - ({item.noTelpon})
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
              }}
              numberOfLines={2}
            >
              {item.alamat}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
          Belum ada alamat
        </Text>
      </View>
    );
  };

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
            Alamat Saya
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.push("TambahAlamat")}>
          <View style={{ marginRight: -11, padding: 10 }}>
            <MaterialIcons name="add" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </>
  );
}
