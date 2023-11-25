import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Home } from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false, statusBarStyle: "red"}}/>  
    </Stack.Navigator>
  );
}

export default Router;    