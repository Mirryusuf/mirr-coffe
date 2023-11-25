import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Home } from '../pages';

const Stack = createStackNavigator();
const route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default route;