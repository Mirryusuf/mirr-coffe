import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Home } from '../pages';

const Stack = createStackNavigator();
const route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default route;