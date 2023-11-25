import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, DetailProduct, Keranjang } from "../pages";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      /> */}
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} >
        <Main />
      </Stack.Screen>
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
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
