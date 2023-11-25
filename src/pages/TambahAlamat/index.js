import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function TambahAlamat({ navigation, route }) {
  const dispatch = useDispatch();
  const userListGlobalState = useSelector(
    (state) => state.userReducer.userList
  );

  const [userList, setUserList] = useState(userListGlobalState ?? []);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    namaAlamat: "",
    namaPenerima: "",
    noTelpon: "",
    alamat: "",
  });

  const isFormValid = () => {
    return (
      inputs.namaAlamat !== "" &&
      inputs.namaPenerima !== "" &&
      inputs.noTelpon !== "" &&
      inputs.alamat !== ""
    );
  };

  const setInput = (key, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [key]: value }));
  };

  const handleButton = useCallback(() => {
    setLoading(true);
    let setupData;
    let dataUser = userList;

    const getIndexUser = dataUser.findIndex((x) => {
      return x.isLogin == true;
    });

    if (getIndexUser !== -1) {
      setupData = {
        id: dataUser[getIndexUser].alamat.length + 1,
        ...inputs,
        active: dataUser[getIndexUser].alamat?.length ? false : true,
      };
      dataUser[getIndexUser].alamat.push(setupData);

      dispatch({ type: "SET_USERLIST", payload: dataUser });

      setTimeout(() => {
        setLoading(false);
        navigation.push("Alamat");
      }, 1500);
    } else {
      Alert.alert("Gagal", "Gagal tambah alamat!", [], {
        cancelable: true,
      });
      setLoading(false);
    }
  }, [userList, inputs]);

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
            Tambah Alamat
          </Text>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.push("TambahAlamat")}> */}
        <View style={{ marginRight: -11, padding: 10, opacity: 0 }}>
          <MaterialIcons name="add" size={24} color="black" />
        </View>
        {/* </TouchableOpacity> */}
      </View>

      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Nama Penerima
            </Text>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 52,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                marginHorizontal: 20,
              }}
            >
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Nama Penerima"
                onChangeText={(text) => setInput("namaPenerima", text)}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Nama Alamat
            </Text>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 52,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                marginHorizontal: 20,
              }}
            >
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Nama Alamat"
                onChangeText={(text) => setInput("namaAlamat", text)}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              No. Telpon
            </Text>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 52,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                marginHorizontal: 20,
              }}
            >
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="No. Telpon"
                keyboardType="phone-pad"
                onChangeText={(text) => setInput("noTelpon", text)}
                maxLength={14}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Alamat Lengkap
            </Text>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 110,
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
                marginHorizontal: 20,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  height: 100,
                  fontSize: 16,
                  textAlignVertical: "top",
                }}
                placeholder="Alamat Lengkap"
                multiline={true}
                maxLength={256}
                onChangeText={(text) => setInput("alamat", text)}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 25,
            paddingHorizontal: 20,
            paddingVertical: 13,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              borderRadius: 8,
              backgroundColor: "#C67C4E",
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={!isFormValid()}
            onPress={() => handleButton()}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "white",
              }}
            >
              Tambah
            </Text>
          </TouchableOpacity>
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
    </>
  );
}
