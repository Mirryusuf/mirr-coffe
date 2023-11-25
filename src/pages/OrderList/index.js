import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function OrderList({ navigation, route }) {
  const orderListGlobalState = useSelector(
    (state) => state.productReducer.orderList
  );
  const userListGlobalState = useSelector(
    (state) => state.userReducer.userList
  );
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getDataUser = userListGlobalState.filter((x) => {
        return x.isLogin == true;
      });

      if (getDataUser.length) {
        const getDataByUser = orderListGlobalState.filter((x) => {
          return x.userId == getDataUser[0].userId;
        });

        const reversedData = [...getDataByUser].reverse();
        setData(reversedData || []);
      } else {
        setData([]);
      }
    }, [orderListGlobalState])
  );

  const numberWithCommas = useCallback((x) => {
    if (!x) return false;
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const keyExtractor = useCallback((item, index) => `${index}-${item.id}`, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 15 }}
        onPress={() => navigation.push("DetailOrder", { data: [item] })}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "#C67C4E",
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
              #{item.id}
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {item.createdAt}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {item.orderMethod} - Jumlah ({item.product.length})
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginTop: -2,
              }}
            >
              Rp.{numberWithCommas(item.totalHarga)}
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
          Belum ada data pesanan
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
          justifyContent: "center",
          alignItems: "center",
          height: 56,
          marginTop: 30,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Pesanan Saya
          </Text>
        </View>
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
