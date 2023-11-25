import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Home } from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, statusBarTranslucent: false, statusBarStyle: "dark", animationEnabled: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false, statusBarTranslucent: false, statusBarStyle: "dark", animationEnabled: false }} />
    </Stack.Navigator>
  );
}

export default Router;