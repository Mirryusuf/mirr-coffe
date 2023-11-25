import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Home, DetailProduct, Keranjang } from "../pages";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={34} />
          ),
        }}
      />

      <Tab.Screen
        name="Pesanan"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={34} />
          ),
        }}
      />

      <Tab.Screen
        name="Akun"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={34} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
