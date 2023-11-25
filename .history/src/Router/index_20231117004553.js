import { createStackNavigator } from '@react-navigation/stack';

import { Home, DetailProduct } from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>  
      <Stack.Screen name="DetailProduct" component={DetailProduct} options={{headerShown: false}}/>  
    </Stack.Navigator>
  );
}

export default Router;