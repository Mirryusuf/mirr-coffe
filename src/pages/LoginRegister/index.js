import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginRegister({ navigation, route }) {
  const dispatch = useDispatch();
  const userGlobalState = useSelector((state) => state.userReducer.userList);

  const [userList, setUserList] = useState(userGlobalState ?? []);
  const [activeForm, setActiveForm] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const isFormValid = () => {
    if (activeForm === 0) {
      return inputs.email !== "" && inputs.password !== "";
    } else {
      return (
        inputs.name !== "" &&
        inputs.email !== "" &&
        inputs.password !== "" &&
        inputs.confirmPassword !== ""
      );
    }
  };

  const setInput = (key, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [key]: value }));
  };

  const handleButton = useCallback(() => {
    setLoading(true);
    let setupData;
    let dataUser = userList;

    const cekUserList = dataUser.filter((x) => {
      return x.email == inputs.email;
    });

    if (activeForm === 0) {
      if (cekUserList.length) {
        if (cekUserList[0].password == inputs.password) {
          const foundUserIndex = dataUser.findIndex(
            (x) => x.email == inputs.email
          );

          if (foundUserIndex !== -1) {
            dataUser[foundUserIndex].isLogin = true;
          }

          dispatch({ type: "SET_USERLIST", payload: dataUser });

          setTimeout(() => {
            setLoading(false);
            navigation.push("Main");
          }, 1500);
        } else {
          Alert.alert("Gagal", "Email / Password anda salah!", [], {
            cancelable: true,
          });
          setLoading(false);
        }
      } else {
        Alert.alert("Gagal", "Email / Password anda salah!", [], {
          cancelable: true,
        });
        setLoading(false);
      }
    } else {
      if (inputs.password === inputs.confirmPassword) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(inputs.email)) {
          if (cekUserList.length) {
            Alert.alert("Gagal", "Email sudah terpakai!", [], {
              cancelable: true,
            });
            setLoading(false);
          } else {
            setupData = {
              id: userList.length + 1,
              name: inputs.name,
              email: inputs.email,
              password: inputs.password,
              alamat: [],
              isLogin: true,
            };

            dataUser.push(setupData);

            dispatch({ type: "SET_USERLIST", payload: dataUser });

            setTimeout(() => {
              setLoading(false);
              navigation.push("Main");
            }, 1500);
          }
        } else {
          Alert.alert("Gagal", "Format Email tidak sesuai!", [], {
            cancelable: true,
          });
          setLoading(false);
        }
      } else {
        Alert.alert("Gagal", "Konfirmasi Password tidak sesuai!", [], {
          cancelable: true,
        });
        setLoading(false);
      }
    }
  }, [userList, activeForm, inputs]);

  return (
    <>
      <StatusBar style="auto" />

      <ScrollView style={{ backgroundColor: "white" }}>
        <LinearGradient
          colors={["#131313", "#313131"]}
          style={{
            height: 200,
            paddingHorizontal: 20,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginTop: -20,
            }}
          >
            Selamat datang di Mirr-Coffee!
          </Text>
        </LinearGradient>

        <View
          style={{
            marginTop: -35,
            zIndex: 98,
            marginHorizontal: 20,
            height: 140,
          }}
        >
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
              disabled={activeForm == 0 ? true : false}
              onPress={() => setActiveForm(0)}
              style={{
                backgroundColor: activeForm == 0 ? "#C67C4E" : "#F2F2F2",
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
                  color: activeForm == 0 ? "white" : "black",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={activeForm == 1 ? true : false}
              onPress={() => setActiveForm(1)}
              style={{
                backgroundColor: activeForm == 1 ? "#C67C4E" : "#F2F2F2",
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
                  color: activeForm == 1 ? "white" : "black",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeForm == 0 ? (
          <View style={{ zIndex: 99, marginTop: -35 }}>
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
              <MaterialIcons
                name="email"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Email"
                onChangeText={(text) => setInput("email", text)}
              />
            </View>

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
                marginTop: 25,
              }}
            >
              <FontAwesome5
                name="lock"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Password"
                secureTextEntry={!showPassword}
                onChangeText={(text) => setInput("password", text)}
                maxLength={8}
              />
              <TouchableOpacity
                style={{ padding: 15, paddingRight: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#131313"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ zIndex: 99, marginTop: -35 }}>
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
              <MaterialIcons
                name="email"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Nama"
                onChangeText={(text) => setInput("name", text)}
              />
            </View>

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
                marginTop: 25,
              }}
            >
              <MaterialIcons
                name="email"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Email"
                onChangeText={(text) => setInput("email", text)}
              />
            </View>

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
                marginTop: 25,
              }}
            >
              <FontAwesome5
                name="lock"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Password"
                secureTextEntry={!showPassword}
                onChangeText={(text) => setInput("password", text)}
                maxLength={8}
              />
              <TouchableOpacity
                style={{ padding: 15, paddingRight: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#131313"
                />
              </TouchableOpacity>
            </View>

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
                marginTop: 25,
              }}
            >
              <FontAwesome5
                name="lock"
                size={20}
                color="#131313"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, height: 42, fontSize: 16 }}
                placeholder="Konfirmasi Password"
                secureTextEntry={!showPassword2}
                onChangeText={(text) => setInput("confirmPassword", text)}
                maxLength={8}
              />
              <TouchableOpacity
                style={{ padding: 15, paddingRight: 0 }}
                onPress={() => setShowPassword2(!showPassword2)}
              >
                <Ionicons
                  name={showPassword2 ? "eye" : "eye-off"}
                  size={20}
                  color="#131313"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

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
              {activeForm == 0 ? "Masuk" : "Daftar"}
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
