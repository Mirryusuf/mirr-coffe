import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

import { Home, DetailProduct, Keranjang, OrderList, Account } from "../pages";

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
        name="Menu"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="local-drink"
              color={color} 
              size={24}
              style={{ paddingTop: 3 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Pesanan"
        component={OrderList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="list-alt"
              color={color}
              size={25}
              style={{ paddingTop: 3 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Akun"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="user-alt"
              color={color}
              size={20}
              style={{ paddingTop: 3 }}
            />
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
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
