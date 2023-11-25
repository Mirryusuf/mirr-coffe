import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

import Router from "./src/router";
import store from "./src/redux";

export default function App() {
  return (
    <MenuProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </MenuProvider>
  );
}
