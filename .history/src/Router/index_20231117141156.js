import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { Home, DetailProduct, Keranjang } from "../pages";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 50 },
        headerShown: false,
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} style={{paddingTop: 3}} />
          ),
        }}
      />

      <Tab.Screen
        name="Pesanan"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list-alt" color={color} size={26} style={{paddingTop: 3}}  />
          ),
        }}
      />

      <Tab.Screen
        name="Akun"
        component={Keranjang}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
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
